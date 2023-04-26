//// <reference types="Cypress" />

describe("Custom Command",()=>{

   it.skip("Cutom Login command",()=>{  
      cy.visit('https://staging-app.eosaregion.com/')
     // cy.visit("https://staging-app.eosaregion.com/")
      //cy.clicklink("loginapp")
      cy.login("tejas.pavaskar@joshsoftware.com","Tejas@123")

   })


   it.skip("Loginweb",()=>{
      cy.visit("http://www.webdriveruniversity.com/")
      cy.get('#contact-us').invoke('removeAttr','target').click()

      cy.Loginweb("Tejas","Lastname","tpavaskar781@gmail.com","for testing")


   })
   
   it("select cources"),()=>{

       cy.visit("https://test.qatechhub.com/form-elements/")
       .select("Cypress")
        .should("have.value",'Cypress')
         cypress.command.add()

   }

})