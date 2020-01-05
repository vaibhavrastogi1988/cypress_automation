class PurchasePage {


    setCountry(){
        return cy.get('#country')
    }

    selectCountryFromSuggestions(){
        return cy.get('.suggestions > ul > li > a')
    }

    termsAndConditons(){
        return cy.get('#checkbox2')
    }

    clickSubmit(){
        return cy.get('input[type="submit"]')
    }

    validateSuccessAlert(){
        return cy.get('.alert')
    }
}

export default PurchasePage;