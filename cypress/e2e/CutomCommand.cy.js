//// <reference types="Cypress" />

describe("Custom Command",()=>{

   it.skip("Cutom Login command",()=>{  

      cy.visit("https://staging-app.eosaregion.com/")
      //cy.clicklink("loginapp")
      cy.login("tejas.pavaskar@gmail.com","Tejas@123")

   })


   it("Loginweb",()=>{
      cy.visit("http://www.webdriveruniversity.com/")
      cy.get('#contact-us').invoke('removeAttr','target').click()

      cy.Loginweb("Tejas","Lastname","tpavaskar781@gmail.com","for testing ")


   })


})