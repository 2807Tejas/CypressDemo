///reference types = 'cypress-xpath'

describe("file upoad ",()=>{

    it("single file upload",()=>{
        
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").selectFile("/home/lenovo/swapnil/cypress/fixtures/Cypress.pdf")
    cy.get("#file-submit").click()

        
    

})

it("single file upload Rename",()=>{
        
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").selectFile("/home/lenovo/swapnil/cypress/fixtures/Cypress.pdf")
    cy.get("#file-submit").click()

        
    

})



})