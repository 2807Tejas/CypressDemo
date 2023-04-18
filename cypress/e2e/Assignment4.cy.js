//// <reference types="Cypress" />
//// <reference types="Cypress" />
///reference types = 'cypress-xpath'

describe("Assignment of dropdown handel",()=>{

    it("Dropdown handel Lable ",()=>{
        cy.visit("https://formstone.it/components/dropdown/demo/")
        cy.get("#demo_basic-dropdown-selected").click()
        cy.xpath("//div/button[contains(text(),'Two') and @class='fs-dropdown-item fs-dropdown-item_selected']")

        
    })

    it.skip("Dropdown lable 2",()=>{

        cy.get("#demo_groups-dropdown-selected").click()
        cy.get("")
    })
})