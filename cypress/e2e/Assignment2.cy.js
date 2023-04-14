///<refrances types ="cypress"/>

describe('Assignment2', () => {
    it("assignment",()=>{

           cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm")
           cy.get("[name='firstname']").type("Tejas",{force:true})
           cy.get("[name='lastname']").type("Pavaskar",{force:true})
           //cy.wait(5000)
           cy.get("[value='Male']").click()
           cy.get("[value='2']").click({force:true})
           cy.get("//table/tbody/tr[5]/td[2]/input").type("14/04/2023")
          // cy.get("//tbody/tr[5]/td[2]/input").type("13/04/2023")
        //   cy.get("//tbody/tr[6]/td[2]/span[1]/input").click()
           cy.get("[value='Manual Tester']").click()           //proffession
        //   cy.get("//tbody/tr[8]/td/span[2]/input[1] ").click()         // flovers of selenium 
          


    })
    
});