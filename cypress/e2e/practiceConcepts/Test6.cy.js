///<reference types="Cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'

describe('test4', () => {

    it('test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //npm install -D cypress-iframe

        //cy.wait(2000)
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('[href="mentorship"]').eq(0).click()
        cy.iframe().contains('Mentorship').should('exist')
        //cy.get('@mentor').should('have.length', 2)

    })
})