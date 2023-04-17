describe("Explicite Assertion",()=>{

      it("ExpliAssertion",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("[placeholder='Username']").type("Admin")
        cy.get("[type='password']").type("admin123")
        cy.get("[type='submit']").click()
 

      })

           let expName='xyz'
           cy.get(".oxd-userdropdown-name").then((x)=>{

                   let actName=x.text()
                   expect(actName).to.equal(expName)
                   expect(actName).to.not.equal(expName)

           })

})