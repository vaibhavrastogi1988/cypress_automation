/// <reference types="Cypress" />
describe('WebPage Operations', function() {


    it('Handle Child Window', function(){
        // cy.visit('http://qaclickacademy.com/practice.php')
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(e1) {
            const url = e1.prop("href")
            cy.request(url)
        })

    })

})