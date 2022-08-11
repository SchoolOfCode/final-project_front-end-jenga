import * as React from "react";
import * as ReactDOM from "react-dom";
import Map from "./Map.js";

//Testing whether the AnnouncementList component is successfully rendered
it("Map - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Map />, div);
  ReactDOM.unmountComponentAtNode(div);
});
