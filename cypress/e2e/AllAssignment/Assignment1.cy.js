//import 'cypress-file-upload'
describe('CSSselector Locator',function(){
    it('CSSselector',()=> {
  
      cy.visit("https://staging-app.eosaregion.com/")
      cy.get(".text-uppercase.website-login-btn.btn.btn-secondary").click()
      cy.get("[name='email']").type("tejas.pavaskar@joshsoftware.com")
      cy.get("[name='password']").type("Tejas@123")
      cy.get("[name='password']").should('have.value','Tejas@123')     //To verify passing parameter correct or not 
      cy.get(".text-uppercase.px-5.fw-bold.d-block.mx-auto.btn.btn-secondary.btn-sm").click()
      
      //file upload 
      //cy.wait(3000)
      //cy.get(".icon-upload ").click()
      //cy.wait(5000)
      //cy.get(".app-browse-file-wrap.bg-white").click()
      //cy.get(".app-browse-file-wrap.bg-white").attachFile('system.csv');
      //cy.get("[type='submit']")
    })

    

     
})