import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Web13661 from "./components/Web13661";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/web-1366-1">
          <Web13661
            overlapGroup="/img/image-1@1x.png"
            welcome="/img/welcome@1x.png"
            text1="Login button (WILL BE CHANGED)"
          />
        </Route>
        <Route path="/:path(|welcome)">
          <Welcome
            x2_Vi_Design_Ribbon_10="/img/2-vi-design-ribbon-10@1x.png"
            x1r9uD=""
            place="Welcome"
            text1="Connect to this device's Wi-Fi"
            rpi_Xxxxxx="RPI_xxxxxx"
            polygon1="/img/polygon-1@1x.png"
            logo="/img/logo@1x.png"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
