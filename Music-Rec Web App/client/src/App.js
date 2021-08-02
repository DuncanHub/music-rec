import 'bootstrap/dist/css/bootstrap.min.css'
//import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Authorize from "./components/Authorize";
import SongSearch from "./components/SongSearch";
import Signup from "./components/Signup";
import LogIn from "./components/LogIn";
import background from "./image-1-1@1x.png"
import welcome from "./welcome@1x.png"
import spotifylogin from "./spotify-log-in@1x.png"
import songsearch from "./song-search@1x.png"
import signuppic from "./sign-up@1x.png"
import loginpic from "./file---log-in@1x.png"
import background2 from "./image-1-3@1x.png"
import Login from './Login'
import Dashboard from './Dashboard'

//Gets the code portion from the URL
const code = new URLSearchParams(window.location.search).get('code')

//If the code is availiable, then refer to the dashboard file
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|welcome)">
          <Welcome overlapGroup={background} welcome={welcome} title="Log-In" place="Register" />
        </Route>
        <Route path="/authorize">
          <Authorize
            overlapGroup={background}
            spotifyLogIn={spotifylogin}
            authorize="Authorize"
          />
        </Route>
        <Route path="/songsearch">
          <SongSearch overlapGroup={background} songSearch={songsearch} />
        </Route>
        <Route path="/signup">
          <Signup 
          overlapGroup={background}
          signUp = {signuppic}
          inputType = "text"
          inputPlaceholder = "username"
          inputType2 = "text"
          inputPlaceholder2 = "password"
          inputType3 = "text"
          inputPlaceholder3 = "re-type password"
          signUp2 = "Sign-Up" />
        </Route>
        <Route path="/log-in">
          <LogIn 
          overlapGroup = {background2}
          logIn = {loginpic}
          inputType = "text"
          inputPlaceholder = "username"
          inputType2 = "text"
          inputPlaceholder2 = "password"
          spanText = "New? Sign in "
          spanText2 = "here."
          logIn2 = "Log-In" />
        </Route>
      </Switch>
    </Router>
  );
  //return code ? <Dashboard code={code} /> : <Login /> put later
}

export default App;

