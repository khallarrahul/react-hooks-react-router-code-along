import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { Route } from "react-router-dom";
import Navbar from "./NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}

export default App;
