// To run Cypress Test runner
// Run command - node_modules\.bin\cypress open
/// <reference types="Cypress" />
describe('My First Test', function() {
    it('Test case to add to cart', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product').should('have.length', 5)
      // 1st type of assert validation
      cy.get('.product:visible').should('have.length', 4)
      // cy.get(':nth-child(2) > .product-action > button').click()
      cy.get('.products').as('productList')
      cy.get('@productList').find('.product').should('have.length',4)
      cy.get('@productList').find('.product').eq(2).contains('ADD TO CART').click().then(() =>{
        console.log("Clicked successfully")
      })

      // To iterate elements on webpage
      cy.get('@productList').find('.product').each(($el, index, $list) => {
        const text_veg = $el.find('h4.product-name').text()
        if(text_veg.includes('Cashews')){
          $el.find('button').click()
        }
      })

      //assert logo text - 2nd type of assert validation
      cy.get('.brand').should('have.text', 'GREENKART')
      cy.get('.brand').then(function(logo_element) {
        cy.log(logo_element.text())
      })

    })
  })