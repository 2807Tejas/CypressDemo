describe('create new memebr',()=>{

    beforeEach(" Memener ",()=>{
        cy.visit("https://staging-app.eosaregion.com/")
        //cy.clicklink("loginapp")
        cy.login("tejas.pavaskar@joshsoftware.com","Tejas@123")
        
  
    })

    it('Eo- memebr',()=> {
          
        cy.get(':nth-child(1) > .aside-nav-link-item').click()
        //cy.get("//span[text()='EO Member']").click() 
        //cy.get("//div[@class='aside-nav-wrapper d-flex flex-1 scroll-y']/ul/li[1]")        
        cy.get(".icon-plus.fs-4").click()
        cy.get("[name='first_name']").type("Mahesh")
        cy.get("[name='last_name']").type("Patil")
        cy.get("[name='email']").type("mahesh@gmail.com")
        cy.get("#contact_number").type("1122334455")
        cy.get("[name='company_name']").type("Josh")
        cy.get("[name='designation']").type("QA")

        cy.get("#react-select-4-placeholder").click({force:true})   //role
        cy.contains("Chapter Admin").click({force:true})
        
        cy.get("#react-select-5-input").click({force:true})        // Region
        //cy.wait(2000)  
        cy.get('#react-select-5-option-0').click({force:true})
        //cy.wait(1000)
        //cy.get('.eo-select__single-value').eq(1).should('have.text','South Asia')
       
     
     
      
    })

})