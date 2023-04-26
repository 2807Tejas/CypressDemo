// const cypress = require("cypress")

describe("Dropdown with custom cammand ", () => {

    it("select dropdown", () => {

        cy.visit("https://test.qatechhub.com/form-elements/")
        cy.wait(2000)

        //  cy.get("#wpforms-49-field_5")
        // .select("Cypress")
        // .should("have.value",'Cypress')
        //  cypress.command.add()

        cy.course('TestComplete')

    })

})