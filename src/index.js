import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementsByTagName("body"));

if (module.hot) {
  module.hot.accept("./App.js", function() {
    console.log("Accepting the updated !");
    printMe();
  });
}
