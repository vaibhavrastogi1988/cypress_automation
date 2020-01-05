/// <reference types="Cypress" />
describe('WebPage Operations', function() {


    it('Handle Child Window', function(){
        // cy.visit('http://qaclickacademy.com/practice.php')
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'qaclickacademy')
        cy.go('back')
        cy.url().should('include', 'rahulshettyacademy')

    })

})