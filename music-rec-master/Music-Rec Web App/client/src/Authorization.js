import { useState, useEffect} from 'react'
import axios from 'axios'

//This file is a custom hook

//Funstion that passes code as a parameter and stores the accessToken, refreshToken, and expiresIn which we get from the server
export default function Authorization(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    //useEffect to get the information
    useEffect(() => {
        axios
            .post('http://localhost:3001/login', {
                code,
            })
            //Setting our data
            .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, null, "/")
            })
            //Redirect the user to the login page if there's an error
            .catch(() => {
                window.location = "/"
            })
    }, [code])

    //Refresh the token once the time has expire, outputs information about the accessToken and expiresIn
    useEffect(() => {
        axios
            .post('http://localhost:3001/refresh', {
                refreshToken,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
            })
            .catch(() => {
                window.location = "/"
            })
        }, [refreshToken, expiresIn])
    
    //Needed to use all the features of Spotify's API
    return accessToken
}
