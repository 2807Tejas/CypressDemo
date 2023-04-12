describe('TestSuit',() => {

it('Screenshot',() => {

    cy.visit("https://staging-app.eosaregion.com/")
    cy.screenshot("homepage")
    cy.wait(5000)
    
  });

    
});