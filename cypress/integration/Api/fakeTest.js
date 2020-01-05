// To run Cypress Test runner
// Run command - node_modules\.bin\cypress open
/// <reference types="Cypress" />
describe('API Test', function() {
    it('Fake API Test', function() {

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()
        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: {
                error: "Hey Comment do not exist"
            },
            delay: 1000
        }).as('UpdateComment')

        cy.get('.network-put').click()

        cy.wait('@UpdateComment')
        cy.get('.network-put-comment').should('contain', 'Hey Comment do not exist')
    })
  })