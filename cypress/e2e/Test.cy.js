describe(" Test",()=>{

    it("Test1",()=>{

        Cypress.on("uncaught:exception",(error,runnable)=>{
            return false;
        })
        cy.visit("http://www.unit-conversion.info/texttools/random-string-generator/")
        cy.get(".btn-submit.btn.orange").click()
        cy.get("#output").invoke('text').as("Output")
    })

    it("",()=>{
        cy.log(this.Output)
    })


})