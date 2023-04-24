/// <reference types = "Cypress" /> 

describe("Web table handling",()=>{

      it(" web table",()=>{
        cy.visit("https://www.dezlearn.com/webtable-example/")
        cy.xpath("//table/tbody/tr[2]/td[1]").should('have.text','Tim Watson') // verify the name 
         
        cy.xpath("//table[@class='tg']/tbody/tr[2]/td[2]").should('have.text','tim@dezlearn.com')
        cy.xpath("//table[@class='tg']/tbody/tr[2]/td[3]/input[@type='checkbox']").check()
        cy.xpath("//table[@class='tg']/tbody/tr[2]/td[4]/input[@type='checkbox']").check()
        cy.xpath("//tbody/tr[2]/td[5]").click({force:true})
        cy.wait(500)
        cy.get(".elementor-widget-container select").eq(0).select("Sedan")
        //cy.xpath("//table[@class='tg']/tbody/tr[2]/td[5]/select/option[5]").select("sidan",{force:true})
        cy.xpath("//tbody/tr[2]/td[6]/input").type("For Testing")
        cy.get("#demo").click()
      })



})