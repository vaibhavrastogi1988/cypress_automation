// To run Cypress Test runner
// Run command - node_modules\.bin\cypress open
/// <reference types="Cypress" />
describe('API Test', function() {
    it('CRUD API Test', function() {

        cy.request('POST', 'https://216.10.245.166/Library/Addbook.php',
        {
            "name": "Learn Cypress",
            "isbn": "abc",
            "aisle": "1234",
            "author": "abc def"
        }).then(function(response){
            expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response.status).to.eq(200)
        })
        
    })
  })