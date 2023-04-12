describe("RadiobuttonCheckbox",()=> { 

    it("radiobutton",()=>{ 

        cy.visit("https://test.qatechhub.com/form-elements/")
        cy.get("input#wpforms-49-field_1").type("Tejas")
        cy.get(".wpforms-field-name-last.wpforms-field-required").type("Pavaskar")
        cy.get("[name='wpforms[fields][2]']").type("Tejas.paVaskar@joshsoftware.com")
        cy.get("#wpforms-49-field_4").type("8149256729")
        cy.get("[value='Male']").check().should("be.checked")

       // unselected checkbox 
       // cy.get("[value='Male']").uncheck().should("not.be.checked")

        // to check visibility 
        cy.get("[value='Male']").should('be.visible')

        // to select value from the dropdown by select smt
        cy.get("#wpforms-49-field_5")
        .select("Cypress")
        .should("have.value",'Cypress')

        cy.get("#wpforms-submit-49").click()




    })
    


})