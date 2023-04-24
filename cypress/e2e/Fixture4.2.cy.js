

describe("Fixture test data",function(){
 
      it("OrangeHRM", function(){

     cy.visit("https://opensource-demo.orangehrmlive.com/")

     cy.fixture('OrangeHRM.json').then((data)=>{ 
                 
     cy.get("[name='username']").type(data.Username)
     cy.get("[type='password']").type(data.Password)
     cy.get("[type='submit']").click()
    
  })

})
})