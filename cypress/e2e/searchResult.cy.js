const url = "http://localhost:3000/";

describe("Search Results Page", () => {
  it.only("should display correct text content", () => {
    cy.visit(url);
    cy.get(".title").should("contain", "FINDERS KEEPERS");
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
      .should("eq", `${url}SearchResult`);
    cy.get(".title").should("contain", "FINDERS KEEPERS");
    cy.get(".country-name").should("contain", "DENMARK");
    cy.get(".googleMap").should("be.visible");
    cy.get("a > .nav-link").click();
    cy.get(".title").should("contain", "FINDERS KEEPERS");
  });
});
