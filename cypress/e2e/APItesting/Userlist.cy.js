describe('API testing Demo',()=>{

    it('Users List',()=>{

        cy.request({
            url:'https://reqres.in/api/users?page=2',
            method:'GET'
        }).then((res)=>{

            expect(res.status).to.eq(200)
        })
    })
})