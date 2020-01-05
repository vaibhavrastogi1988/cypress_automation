/// <reference types="Cypress" />
describe('WebTable Operations', function() {


    it('Handle WebTable', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#product > tbody > tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Python')){
                cy.get('#product > tbody > tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const actual_price = price.text()
                    expect(Number(actual_price)).to.equal(25)
                })
            }
        })


    })

})