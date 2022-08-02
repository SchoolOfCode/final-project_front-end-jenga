const url = ("http://localhost:3000/");
describe("Landing Page", () => {
    it("should display correct text content", () => {
      cy.visit(url);
      cy.get(".title").should("contain", "FINDERS KEEPERS");
      cy.get('.location-search-input').invoke("attr", "placeholder").should("contain","SEARCH");
      cy.get('.location-search-input').type("d").should("have.value", "d").its(0).click();
      cy.get('.autocomplete-dropdown-container').click();
    //   cy.get('.suggestion-item').click();
      cy.get(':nth-child(1) > span').click().url().should('eq', `${url}SearchResult`);
});
});
// From Line 6-10, we are getting the dropdown menu by typing letter "d" which then gives Denmark as the first choice in the dropdown 
//menu. It then selects and clicks Denmark. 