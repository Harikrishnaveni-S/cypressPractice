///<reference types="Cypress" />


describe('test3', () => {

    it('test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //alerts
        cy.get('[id="alertbtn"]').click()

        cy.on('window:alert', (txt) => {
            expect(txt).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('[id="confirmbtn"]').click()
        cy.on('window.confirm', (msg) => {
            expect(msg).to.equal('Hello , Are you sure you want to confirm?')
            return false
        })

        cy.url().should('include', 'rahulshettyacademy')
        cy.get('#opentab').invoke("removeAttr", 'target').click()

        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.url().should('include', 'qaclickacademy')
            cy.go('back')

        })
        cy.url().should('include', 'rahulshettyacademy')

        // cy.go('back')

        // cy.wait(4000)
        // cy.url().should('include', 'qaclickacademy')
    })
})
