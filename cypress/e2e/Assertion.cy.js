/// <reference types="cypress"/>
describe('Assertion ', () => {

    it('Implicit assertion', () => {

        cy.visit("https://staging-app.eosaregion.com/ ")
        
          //cy.wait(5000)
          //cy.url().should('include','eosaregion.com/')
          //cy.url().should('eq','https://staging-app.eosaregion.com/')
          //cy.url().should('contain','eosaregion.com/')
        
          cy.title().should('include','EO South Asia')                       // page title 
          
          cy.wait(5000)
        cy.get(".authentication-wrapper.shadow-sm.scroll-y.h-100").should('be.visible')
    
    });
    
});