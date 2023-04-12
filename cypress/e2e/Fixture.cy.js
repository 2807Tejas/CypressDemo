

describe("Fixture",()=>{

  it.skip("Testcase",()=>{

    cy.visit("https://staging-app.eosaregion.com/")
      cy.get(".text-uppercase.website-login-btn.btn.btn-secondary").click()
      
      cy.fixture("EoSouth").then((data)=>{


      

      cy.get("input[placeholder='Enter email']").type("username.data")
      cy.get("input[placeholder='Enter password']").type("Password.data")
     // cy.get("[name='password']").should('have.value','Tejas@123')     //To verify passing parameter correct or not 
      cy.get(".text-uppercase.px-5.fw-bold.d-block.mx-auto.btn.btn-secondary.btn-sm").click()
     // cy.get(".text-uppercase.fw-bold.mb-0").should('have.text',"Duologue")

  })
})

it("OrangeHRM", function(){

  cy.fixture('OrangeHRM.json ').then((data)=>{ 
               
  })

   cy.visit("https://opensource-demo.orangehrmlive.com/")
   cy.get("[name='username']").type(Username)
   cy.get("[type='password']").type(Password)
   cy.get("[type='submit']").click()
  
})
 
})