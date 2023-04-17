/// <reference types="cypress"/>
describe('Assertion ', () => {

    it.skip('Implicit assertion', () => {

        cy.visit("https://staging-app.eosaregion.com/ ")
        
          //cy.wait(5000)
          //cy.url().should('include','eosaregion.com/')
          //cy.url().should('eq','https://staging-app.eosaregion.com/')
          //cy.url().should('contain','eosaregion.com/')

           cy.url().should('include','eosaregion.com/')
          .should('eq','https://staging-app.eosaregion.com/')
          .should('contain','eosaregion.com/')


           cy.url().should('include','eosaregion.com/')
          .and('eq','https://staging-app.eosaregion.com/')
          .and ('contain','eosaregion.com/')
          .and('not.contain','eosaregion.com/')
        
        
          cy.title().should('include','EO South Asia')                       // page title 
          
          cy.wait(5000)
          cy.get(".authentication-wrapper.shadow-sm.scroll-y.h-100").should('be.visible') // logo visible or not
          cy.get(".authentication-wrapper.shadow-sm.scroll-y.h-100").should('exist')     // logo exist or not
          .and('exist')

          cy.xpath("//a").should("have.length",'5')             // identify link



    });
         cy.visit("https://opensource-demo.orangehrmlive.com/")
         cy.get("[name='username']").type(Admin)
         cy.get("[type='password']").type(admin123)
         cy.get("[type='submit']").click()
  
    
});