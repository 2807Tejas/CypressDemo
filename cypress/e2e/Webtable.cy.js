describe("Handling web table", () => {
    
    it("static table", () => {

        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("[name='username']").type("demo")
        cy.get("[type='password']").type("demo")
        cy.get("[type='submit']").click()
        //table[@class='table table-bordered table-hover']/thead/tr[1]/td
        cy.get('.modal-content').find('button').eq(0).should('be.visible').click()
        cy.wait(5000)
        cy.get('modal-content').should('not.exist')
        cy.get("[id='menu-customer']").click()
        cy.get("#menu-customer>ul>li:first-child").click()

    })

    it("find row and column", () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.value', '10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.value', '7')
    })

    it("Select specific data from table", () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(3)").click()

    })

//     it.skip("Read all data from row and column",()=>{

//     cy.get("table[class='table table-bordered table-hover']>tbody>tr")
//         .each($row, index, $row)
//     cy.wrap($row).within(() => {

//         cy.get("td").each($col, index, $col)
//         cy.log($col.text());
//     })

// })

})