describe('Intranet Login', () => {
    it("Intanet login",()=>{

        cy.visit("https://intranet.joshsoftware.com/")
        cy.contains("Sign in with Josh account").click()
        cy.origin('https://accounts.google.com',()=>{
        cy.get(".w1I7fb:nth-child(1)").click()
        cy.contains("Allow").click()
        cy.xpath
    })

         // Assertion
       // cy.get("[role='alert']").should('have.text','Signed in Successfully!')
        //cy.get(".dropdown-toggle.user-name").click()                               //name click
        //cy.xpath("//li/ul/li[7]").trigger('mouseover')


        cy.get(".icon-plus.add-timesheet-icon").click()
        cy.get(".control-group.select.required.user_time_sheets_project_id").click()
        cy.get(".select.required.active_project_ids").select('EOSouthAsia')
        cy.get("#user_time_sheets_attributes_0_duration").select("4 hours 30 mins")
        //cy.get("")









    })




});