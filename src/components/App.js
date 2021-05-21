import React, { Fragment } from "react";
import Question from "./Questions/Question";
import Information from "./Information/Information";
import Picture from "./Information/Picture";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";
import Next from "./Next/Next";
import Post from "./Posts/Post";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <NavbarMobile />
      <Information />
      <Picture />
      <Question />
      <Post />
      {/* <Next /> */}
    </Fragment>
  );
};

export default App;
