///<refrances types ="cypress"/>

describe('Assignment2', () => {
    it("assignment",()=>{

          cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm")
           cy.get("[name='firstname']").type("Tejas",{force:true})
           cy.get("[name='lastname']").type("Pavaskar",{force:true})
           //cy.wait(5000)
           cy.get("//tbody//tr[3]//input[1]").click()
        //   cy.get("//tbody/tr[4]/td[2]/span[1]").click()
        //   cy.get("//tbody/tr[5]").type("24/03/2023")
        //   cy.get("//tbody/tr[6]/td[2]/span[1]/input").click()
        //   cy.get("/tbody/tr[6]/td[2]/span[2]/input").click()           //proffession
        //   cy.get("//tbody/tr[8]/td/span[2]/input[1] ").click()         // flovers of selenium 
          


    })
    
});