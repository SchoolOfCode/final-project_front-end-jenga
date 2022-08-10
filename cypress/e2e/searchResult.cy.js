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
    cy.get('.categoryBar > :nth-child(1)').should("contain", "Coronavirus").click();
    cy.get('.categoryBar > :nth-child(2)').should("contain", "Safety and security").click();
    // cy.get('.categoryBar > :nth-child(3)').should("contain", "Terrorism").click(); 
    // cy.get('.categoryBar > :nth-child(4)').should("contain", "Local laws and customs").click(); 
    // cy.get('.categoryBar > :nth-child(5)').should("contain", "Entry requirements").click(); 
    // cy.get('.categoryBar > :nth-child(6)').should("contain", "Health").click();
    // cy.get('.categoryBar > :nth-child(7)').should("contain", "Money").click();
    // cy.get('.categoryBar > :nth-child(8)').should("contain", "Arctic travel").click();
    // cy.get('.categoryBar > :nth-child(9)').should("contain", "Travel advice help and support").click();
    cy.get('.text-govAPI').should("be.visible");
    //this is to get the government api part of the page and to get rid of the timeout error 
    //remove the heroku part of the url for this test to work  
  });
  //   it("should return to landing page", () => {
  //   cy.get(".home-button", { timeout: 10000 }).should("contain", "Home");
  //   //timeout is there to give enough time for the government api to load before clicking on the home buton
  //   cy.get(".home-button").click();
  //   cy.get(".title").should("contain", "FINDERS KEEPERS");
  // });
// });
// it("should display correct components", () => {
  
//   });
})
