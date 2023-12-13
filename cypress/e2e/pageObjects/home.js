class home {

    getNameInputField() {
        return cy.get('[class="form-group"] [name="name"]')

    }
    getEmailInput() {
        return cy.get('[name="email"]')
    }

    getPasswordField() {
        return cy.get('[id="exampleInputPassword1"]')
    }

    getGenderDropDown() {
        return cy.get('[id="exampleFormControlSelect1"]')
    }
    getEnterpreneurRadioButton() {
        return cy.get('[id="inlineRadio3"]')
    }
    getTwoWayBindingField() {
        return cy.get('h4 input[name="name"]')
    }

    getEmploy() {
        return cy.get('[id="inlineRadio2"]')
    }
    getCheckMe() {
        return cy.get('[id="exampleCheck1"]')
    }
    getDOB() {
        return cy.get('[name="bday"]')
    }

    getSubmit() {
        return cy.get('[type="submit"]')
    }
}

export default home;