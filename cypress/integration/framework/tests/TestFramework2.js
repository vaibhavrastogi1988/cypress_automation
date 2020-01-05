//command to run test via command line: 
// .\node_modules\.bin\cypress run --spec .\cypress\integration\framework\tests\TestFramework2.js --env url=https://www.rahulshettyacademy.com/angularpractice/ --headed

// In order to use custom reporter like mochawesome then in command line add parameter --reporter mochawesome

// Another way to run test: npm run test (refer scripts section under package.json file) 

/// <reference types="Cypress" />
import HomePage from '../../../support/pageObjects/HomePage'
import ProductPage from '../../../support/pageObjects/ProductPage'
import CheckOutPage from '../../../support/pageObjects/CheckOutPage'
import PurchasePage from '../../../support/pageObjects/PurchasePage'

describe('Initial Cypress Framework', function() {
    before(function() {
        cy.fixture('example').then((data) =>{
            this.data = data
        })
    })

    it('Develop test case using POM', function(){
        Cypress.config('defaultCommandTimeout', 10000)
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkOutPage = new CheckOutPage()
        const purchasePage = new PurchasePage()
        cy.visit(Cypress.env('url'))
        
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterprenuer().should('be.disabled')

        homePage.getShopTab().click()
        
        // Selecting element based on the json array
        this.data.productName.forEach((element)=>{
            // Custome cypress command placed in commands.js file
            cy.selectProduct(element)
        })
        productPage.checkOutButton().click()

        var sum =0
        checkOutPage.getEachProductPrice().each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            cy.log(res)
            sum = Number(sum) + Number(res)

        }).then(()=>{
            cy.log(sum)
        })

        checkOutPage.getTotalPrice().then(function(element){
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(Number(sum))
        })
        checkOutPage.checkOutButton().click()
        purchasePage.setCountry().type('India')
        purchasePage.selectCountryFromSuggestions().click()
        purchasePage.termsAndConditons().click({force: true})
        purchasePage.clickSubmit().click()
        // cy.get('.alert').should('have.value', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        purchasePage.validateSuccessAlert().then(function(element){
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })


    })

})