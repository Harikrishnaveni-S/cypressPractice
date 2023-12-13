///<reference types="Cypress" />

describe('test4', () => {

    it('test', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('table[id="product"] tbody tr td:nth-child(2)').each(($el, index, $List) => {

            if ($el.text().includes("Bugzilla")) {
                cy.get('table[id="product"] tbody tr td:nth-child(2)').eq(index).next().then((t) => {
                    var price = t.text();
                    cy.log(price)
                    expect(price).to.equal('25')
                })
            }

        })

        cy.get('[class="mouse-hover-content"]').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')


        cy.get('[class="mouse-hover-content"]').invoke('show')
        cy.contains('Reload').click()
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
        cy.go('back')



    })
})
