import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import TourList from "./components/TourList";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
