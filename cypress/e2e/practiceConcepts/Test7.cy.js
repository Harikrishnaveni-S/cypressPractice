///<reference types="Cypress" />

describe('test7', () => {

    it('test', () => {

        cy.visit('https://letcode.in/dropable')
        const dataTransfer = new DataTransfer();
        cy.get('[id="draggable"]').trigger('dragstart', {
            dataTransfer
        })
        cy.get('[id="droppable"]').trigger('drop', { dataTransfer })
        cy.get('[id="draggable"]').trigger('dragend', { dataTransfer })

        cy.draganddrop('[id="draggable"]', '[id="droppable"]')


    })
})