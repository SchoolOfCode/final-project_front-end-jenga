const url = "http://localhost:3000/profile";
describe("ProfilePage", () => {
  it("should display correct content including title, logo, home button and login button", () => {
    cy.visit(url);
    cy.get(".title").should("contain", "FINDERS KEEPERS");
    cy.get('.balloon');
    cy.get('.home-button').click();
    cy.visit(url);
    cy.get('.sign').click();
  });
});

