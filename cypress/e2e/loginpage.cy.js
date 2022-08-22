const url = "http://localhost:3000/";
describe("Auth0 Page", () => {
it('logs in', () => {
    cy.visit(url)
    cy.get('.sign').click()
    cy.get('#username').type('enter an email address')
    cy.get('input#password').type('enter a password')
  
    // This redirects us to the site under test
    cy.get('.ccf13ae34 > .ca0d25346').click()
  })

it('logs out', () => {
    cy.get('.sign').click()
    // Now we're on the site under test!
    // This test can only be run after the previous test has created the session
    // cy.get('#current-user').contains('logged in')
    // cy.get('button#edit-1').click()
    // cy.get('input#title').type('Updated title')
    // cy.get('button#submit').click()
    // cy.get('.toast').type('Changes saved!')
  })
   })