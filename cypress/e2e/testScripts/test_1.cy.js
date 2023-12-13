/// <reference types = "Cypress" />
import home from "../pageObjects/home.js";
import shop from "../pageObjects/shop.js";
import checkout from "../pageObjects/checkout.js";

describe("test_1", () => {
    var homePage = new home();
    var shopPage = new shop();
    var checkoutPage = new checkout();

    var sum;
    var price;
    var total;

    before(function () {

        cy.fixture('test_1.json').then(function (testData) {
            this.testData = testData

        })
    })

    it('practiceTest_1', function () {

        cy.visit(this.testData.url)
        //form filling
        homePage.getNameInputField().type(this.testData.name)
        homePage.getNameInputField().should('have.attr', 'minlength', 2)
        homePage.getTwoWayBindingField().should('have.value', this.testData.name)
        homePage.getEmailInput().type(this.testData.email)
        homePage.getPasswordField().type(this.testData.password)
        homePage.getCheckMe().check()
        homePage.getEmploy().check()
        homePage.getGenderDropDown().select(this.testData.gender)
        homePage.getEnterpreneurRadioButton().should('be.disabled')
        homePage.getDOB().type(this.testData.date)
        homePage.getSubmit().click()

        //shop page
        shopPage.getShopMenu().click()
        this.testData.products.forEach((product) => {
            cy.addProduct(product)
        })

        //checkout
        checkoutPage.getCheckout().click()
        sum = 0;
        cy.get('tbody td:nth-child(3) strong').each(($el, index, $list) => {
            price = $el.text().split(" ")[1]
            cy.log(price)
            sum = Number(sum) + Number(price)

        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function (el) {
            total = Number(el.text().split(" ")[1])
            expect(total).to.equal(sum)
        })

        //cy.pause()
        cy.get('[class="btn btn-success"]').debug().click()
        //debugger;

        cy.get('#country').type('Ind')
        cy.wait(3000)
        cy.get('[class="suggestions"] ul li a').each(($el, index, $list) => {
            if ($el.text().includes("India")) {
                cy.wrap($el).click()
            }
        })

        cy.get('[id="checkbox2"]').check({ force: true })
        cy.get('[type="submit"]').click()
        cy.contains('Success!').should('exist')

    })


})

