import React from 'react'
import '../src/style.css'
import { Container } from 'react-bootstrap'

//Requesting authorization for the user to login, includes: client_id, response_type, redirect_uri, scope, and state 
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=73f2fc893d5e420c8abe31fe1f9a3696&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

//Creating a button that redirects you to AUTH_URL for the user to log in
//After login in, there's a code inside the URL that we can use as a token for the user
export default function Login() {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
            
        >
            <div>
                <a className="btn btn-dark btn-lg " href={AUTH_URL}>
                Login with Spotify
                </a>
           </div>
            
          
            
            
        </Container>
    )
}
