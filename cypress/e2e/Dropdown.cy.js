describe('Dropdown handle', () => {
    it.skip("bootstrap-dropdown",()=>{

         cy.visit("https://getbootstrap.com/docs/4.0/components/dropdowns/")
         cy.get(".dropdown-menu.show :nth-child(2)").click()
    })
    

    it.only("Auto suggesition",()=>{

        cy.visit("https://www.google.com/")
        cy.get("[type='text']").type("Josh")
        cy.contains("Josh").click()
    })
}); 




