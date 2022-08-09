const url = "http://localhost:3000/";

describe("Search Results Page", () => {
  it("should display correct text content", () => {
    cy.visit(url);
    cy.get(".title").should("contain", "FINDERS KEEPERS");
  });
    it("should select Denmark from the dropdown menu", () => {
    cy.get(".location-search-input")
      .invoke("attr", "placeholder")
      .should("contain", "SEARCH");
    cy.get(".location-search-input")
      .type("d")
      .should("have.value", "d")
      .its(0)
      .click();
    cy.get(".autocomplete-dropdown-container").click();
    //   cy.get('.suggestion-item').click();
    cy.get(":nth-child(1) > span")
      .click()
      .url()
      .should("eq", `${url}SearchResult?location=Denmark&lat=56.26392&lng=9.501785`);
    cy.get(".title").should("contain", "FINDERS KEEPERS");
    cy.get(".country-name").should("contain", "DENMARK");
    cy.get(".googleMap").should("be.visible");
  });
    it("should return to landing page", () => {
    cy.get(".home-button").should("contain", "Home");
    cy.get(".home-button").click();
    cy.get(".title").should("contain", "FINDERS KEEPERS");
  });
});
