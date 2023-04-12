/// <reference types="Cypress" />
describe("MouseOperation", ()=>{ 

    it("MouseOver",()=> {

        cy.visit("https://demo.opencart.com/")
        cy.get(".nav.navbar-nav>li:nth-child(1)").click()
        cy.get("")
    })

})