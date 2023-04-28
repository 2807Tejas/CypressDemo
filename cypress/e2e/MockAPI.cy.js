describe('API intercept',function(){
    
    
    it('Mock API',()=>{

        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{limit : 20,Name:'Test'}).as('comments')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept =>{
        expect(intercept.response.body.limit).equal(20)
        expect(intercept.response.body.Name).equal('Test')

    })
})
})
