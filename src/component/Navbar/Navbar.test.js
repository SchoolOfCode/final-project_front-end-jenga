import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar.js";
import { BrowserRouter } from "react-router-dom";

describe("Navbar tests", () => {
  test("Navbar renders without crashing", () => {
    render(
      <BrowserRouter>
        <Navbar
          user={{ picture: "user", name: "Bill" }}
          isAuthenticated={false}
        />
      </BrowserRouter>
    );

    const h1Tag = screen.getByText("FINDERS KEEPERS");
    expect(h1Tag).toBeInTheDocument();
  });
});
