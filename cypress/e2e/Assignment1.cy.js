
/// <reference types="cypress"/>
describe("Assignment",()=>{

  it("Assignmet1",()=>{

    cy.visit("http://www.webdriveruniversity.com/")
    cy.get('#contact-us').invoke('removeAttr','target').click()
    //cy.Loginweb('tejas','xyz','tejas@1234','hello!')
    cy.Loginweb('naaz','shaikh','naaz@123','hey!')
   
    
  })



})


