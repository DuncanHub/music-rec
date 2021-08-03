require('dotenv').config()
const express = require('express')
const cors = require('cors')
const SpotifyWebAPI = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(express.json())

//Refreshing the token
app.post('/refresh', (req, res) => {
    //Getting the refreshToken 
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebAPI({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    })

    //Functrion to acutally refresh the token, returns information about the accessToken and expiresIn
    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            })
        }).catch (() => {
            res.status(400)
        })
})


//Login section
app.post('/login', (req, res) => {
    //Passing the code we got from the URL
    const code = req.body.code
    const spotifyApi = new SpotifyWebAPI({
        //Passing all the credentials needed to the api
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    //Function that converts the code into a token, it also returns information about the token
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
})

//Port number
app.listen(3001)