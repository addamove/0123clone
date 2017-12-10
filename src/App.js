import React, { Component } from "react";
import HomePage from "./containers/HomePage/HomePage";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <HomePage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
