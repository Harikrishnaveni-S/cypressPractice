///<reference types = "Cypress" />

describe("Test2", () => {

    it("test", () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //checkbox
        cy.get('[id="checkBoxOption1"]').check().should('be.checked').and('have.value', 'option1')
        cy.get('[id="checkBoxOption1"]').uncheck().should('not.be.checked')
        cy.get('[type="checkbox"]').check(['option2', 'option3'])

        //drpdown
        cy.get('[id="dropdown-class-example"]').select('Option1').should('have.value', 'option1')

        //dynamic drpdwn
        cy.get('[id="autocomplete"]').type('Ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if ($el.text() === "Indonesia") {
                cy.wrap($el).click()
            }
        })
        cy.get("#autocomplete").should('have.value', 'Indonesia')

        //visible invisible check
        cy.get('[id="displayed-text"]').should('be.visible')
        cy.get('[id="hide-textbox"]').click()
        cy.get('[id="displayed-text"]').should('not.be.visible')

        cy.get('[id="show-textbox"]').click()
        cy.get('[id="displayed-text"]').should('be.visible')

        //radio btn
        cy.get('[value="radio3"]').check().should('be.checked')


    })
})