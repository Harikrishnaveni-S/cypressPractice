///<reference types="Cypress" />

describe('First Test', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })




  it('PracticeTest1', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('[placeholder="Search for Vegetables and Fruits"]').type('ca')
    cy.wait(2000)
    cy.get('.products').find('.product').each(($el, index, $list) => {
      var text = $el.text()
      cy.log(text)
      if (text.includes("Carrot")) {
        cy.wrap($el).find('[type="button"]').click()
        cy.wrap($el).find('[type="button"]').invoke('text').should('include', "ADDED")
      }
    })
    cy.get('[class="cart-icon"]').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

  })



})