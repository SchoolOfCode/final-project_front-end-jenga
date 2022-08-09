const url = "http://localhost:3000/";
describe("Landing Page", () => {
  it("should display correct text content", () => {
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
    // cy.get('.suggestion-item').click();
    // the above code shows all the drop down options
    cy.get(":nth-child(1) > span")
      .click()
      .url()
      .should("eq", "http://localhost:3000/SearchResult?location=Denmark&lat=56.26392&lng=9.501785");

      cy.get('.home-button').should("contain", "Home");
      cy.get('.home-button').click();
      cy.get(".title").should("contain", "FINDERS KEEPERS");
  });
});
// From Line 6-10, we are getting the dropdown menu by typing letter "d" which then gives Denmark as the first choice in the dropdown
//menu. It then selects and clicks Denmark.
//Line 16, it's accessing the first element from the dropdown menu and then clicks it and then cheks it has the correct URL.
