// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import LandingPage from "./LandingPage.js";
// import { BrowserRouter } from "react-router-dom";

// //Testing whether the LandingPage component is successfully rendered
// it("LandingPage - renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(
//     <BrowserRouter>
//       <LandingPage />
//     </BrowserRouter>,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

// import { fireEvent, render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import LandingPage from "./LandingPage.js";
// import { BrowserRouter } from "react-router-dom";

// describe("LandingPage tests", () => {
//   test("LandingPage renders without crashing", () => {
//     render(
//       <BrowserRouter>
//         <LandingPage
//           searchTerm={"React"}
//           setSearchTerm={jest.fn()}
//           setCoords={jest.fn()}
//           setNoResults={jest.fn()}
//         />
//       </BrowserRouter>
//     );

//     const h2Tag = screen.getByRole("h2");
//     expect(h2Tag).toBeInTheDocument();
//   });
// });
