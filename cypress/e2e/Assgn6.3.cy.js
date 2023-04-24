/// <reference types="cypress"/>
describe("Single file upload",()=>{
    it("File upload",()=>{

         cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html")
         cy.get("[type=file]").selectFile("/home/lenovo/swapnil/cypress/fixtures/Cypress.pdf")
         cy.get("[value='Send File']").click()

    })



})