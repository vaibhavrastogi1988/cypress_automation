/// <reference types="Cypress" />
describe('Initial Cypress Framework', function() {
    before(function() {
        cy.fixture('example').then((data) =>{
            this.data = data
        })
    })

    it('My First test case', function(){
        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
        
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')

    })

    it('My Second test case', function(){
        cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
        
        cy.contains('Shop').click()
        
        // Selecting element based on the json array
        this.data.productName.forEach((element)=>{
            // Custome cypress command placed in commands.js file
            cy.selectProduct(element)
        })


    })



})