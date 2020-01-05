/// <reference types="Cypress" />
describe('WebPage Operations', function() {

    it('Handle Checkbox', function() {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').click().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').click().should('not.be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption2').click().should('not.be.checked')

        cy.get("input[type='checkbox']").check(['option2', 'option3'])
        cy.get("input[type='checkbox']").uncheck(['option2', 'option3'])

    })

    it("Handle dropdowns", function() {
        //Static dropdown
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('select').select('Option2').should('have.value', 'option2')


        //Dynamic dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            
            if($el.text() === "India"){
                $el.click()
            }

        })
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it('Element displayed/Hide', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').should('be.visible')

    })

    it('Radio button test', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('[value="radio2"]').check().should('be.checked')

    })

    it('Handle Alert test', function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value=Confirm]').click()
        
        // window:alert
        cy.on('window:alert', (str)=>{
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // window:confirm
        cy.on('window:confirm', (str)=>{
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


    })

})