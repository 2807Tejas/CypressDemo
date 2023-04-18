//// <reference types="Cypress" />

describe('Auto suggesation ', () => {
    it('Auto suggest dropdown ', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput[name='search']").type("Delhi")
        cy.wait(4000)
        cy.contains("Central university in New Delhi, India").click()
        
    });
});