///<refrances types ="cypress"/>

describe('Assignment2', () => {
    it("assignment",()=>{

           cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm")
           cy.get("[name='firstname']").type("Tejas",{force:true})
           cy.get("[name='lastname']").type("Pavaskar",{force:true})
           //cy.wait(5000)
           cy.get("[value='Male']").click({force:true})
           cy.get("[value='2']").click({force:true})
           //cy.get("//table/tbody/tr[5]/td[2]/input[@type='text']").type("16/4/2023",{force:true})
           cy.get(":nth-child(5) > [width='65%'] > input").type("17 apr 2023",{force:true})
           //cy.xpath('//table/tbody/tr[5]/td[2]//input[@type="text"]').type("10 April 2023",{force: true})
           cy.get("[value='Manual Tester']").click()
           cy.get("[type='file']").selectFile("/home/lenovo/swapnil/cypress/fixtures/Cypress.pdf",{force:true})
           cy.get("[value='Selenium IDE']").check()
        
        
        
        
           //   cy.get("//tbody/tr[6]/td[2]/span[1]/input").click()
         //             //proffession
        //   cy.get("//tbody/tr[8]/td/span[2]/input[1] ").click()         // flovers of selenium 
          


    })
    
});