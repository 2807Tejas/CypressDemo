import { Login } from '../e2e/PageObject/login'

const l = new Login()

describe("Assignment No.7", () => {
    it("Ecommarce website ", () => {

        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get("#customer_menu_top").click()
        //   cy.get("#loginFrm_loginname").type("Tejas123")
        //   cy.get("#loginFrm_password").type("@Tejas@123")
        //   cy.get("[title='Login']").click()
        l.getUserName().type('Tejas123')
        l.getPassword().type('@Tejas@123')
        l.getSumnitButton().click()
        cy.wait(5000)


        cy.get("#filter_keyword").type('Men')
        cy.wait(2000)
        cy.get('.button-in-search').click()
        // cy.xpath("//div[@class='thumbnails grid row list-inline']/div[2]/div[2]").click()
        cy.xpath("//div[@class='pricetag jumbotron']/a/i").eq(0).click()
        cy.xpath('//div[@class="input-group col-sm-10"]/label[4]').click()
        cy.get('#product_quantity').clear().type('2')
        cy.get('.productpagecart').click()
        cy.get('#cart_checkout1').click()


    })

    it.skip('', () => {
        l.getUserName().type('Tejas123')
        l.getPassword().type('@Tejas@123')
        l.getSumnitButton().click()

    })

})