const url = "https://finders-keepers-soc.netlify.app/";
describe("Landing Page", () => {
  it("Should display correct text content on landing page and directing to the appropriate search results page", () => {
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
      .should(
        "eq",
        "https://finders-keepers-soc.netlify.app/SearchResult?location=Denmark&lat=56.26392&lng=9.501785"
      );
  });
  it("Should return to landing page", () => {
    cy.get(".home-button").should("contain", "Home");
    cy.get(".home-button").click();
    cy.get(".title").should("contain", "FINDERS KEEPERS");
  });
});
// From Line 6-10, we are getting the dropdown menu by typing letter "d" which then gives Denmark as the first choice in the dropdown
//menu. It then selects and clicks Denmark.
//Line 16, it's accessing the first element from the dropdown menu and then clicks it and then cheks it has the correct URL.
