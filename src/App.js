import React, { Component } from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";

class App extends Component {
  render() {
    return (
      <div className="Maki">
        <main className="Maki-content">
          <Feed />
        </main>
      </div>
    );
  }
}

export default App;
