/// <reference types="Cypress" />
describe('MouseOver Operations', function() {

    // Mouse hover events is not supported by Cypress. 
    // We are using alternate way to handle the same 
    it('Handle MouseOver', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        // 1st way to hidden element
        // cy.get('div.mouse-hover-content').invoke('show')
        // 2nd way to forcily click the hidden element
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

    })

})