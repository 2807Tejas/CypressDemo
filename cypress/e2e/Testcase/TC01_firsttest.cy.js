describe('My First Test', () => {

    it('Does not do much!', () => {
      cy.get('[data-test="hero-heading"]').should('have.text', 'Real World Examples')
      cy.get('[data-test="hero-heading"]').then($test =>{
          cy.log($test.text())
      })
      cy.test()
    })

    it('Verifying value in input', ()=>{

      cy.get('.DocSearch-Button-Placeholder').click()
      cy.get('#docsearch-input').should('be.visible')
      .type('test')
      cy.get('#docsearch-input').should('have.value','test')
      cy.get('#docsearch-input').then($abc =>{
          cy.log($abc.val())

          cy.log($abc.attr("autocorrect"))
      })
    })


  })
  
  