/// <reference types="Cypress" />
describe('Test case 2', function() {

    it('Test case for end to end checkout process', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productList')
        // To iterate elements on webpage
        cy.get('@productList').find('.product').each(($el, index, $list) => {
            const text_veg = $el.find('h4.product-name').text()
            if(text_veg.includes('Cashews')){
                $el.find('button').click()
            }
        })
        
        cy.get(".cart-icon > img").click()
        cy.wait(2000)
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })

})