import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./Navbar/Navbar";
// import NavbarMobile from "./Navbar/NavbarMobile";
import Quize from "./Quize/Quize";
// import Header from "./Header/Header";
// import HeaderPictures from "./Header/HeaderPictures";
// import Section from "./Section/Section";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        {/* <NavbarMobile /> */}
        {/* <Header /> */}
        {/* <HeaderPictures /> */}
        <Switch>
          <Route path="/">
            <Quize />
          </Route>
        </Switch>
        {/* <Section /> */}
      </Router>
    </div>
  );
}

export default App;
