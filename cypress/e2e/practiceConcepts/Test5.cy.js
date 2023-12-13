///<reference types="Cypress" />

describe('test4', () => {

    it('test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function (el) {
            var url = el.prop('href')
            cy.log(url)
            cy.visit(url)
            cy.origin(url, () => {
                cy.contains('About us').click()
            })
        })
    })
})