import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App.js";

//Testing whether the AnnouncementList component is successfully rendered
it("App - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
