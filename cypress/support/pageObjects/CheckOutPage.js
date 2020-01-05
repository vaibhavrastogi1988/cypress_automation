class CheckoutPage {


    checkOutButton(){
        return cy.contains('Checkout')
    }

    getEachProductPrice(){
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotalPrice(){
        return cy.get('h3 strong')
    }
}

export default CheckoutPage;