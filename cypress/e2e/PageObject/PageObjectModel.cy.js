login(value)
{

    visit()
    {
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
    }
}

fillemail(value)
{

    Email()
    {
        constfield=cy.get[(id=Email)]
        field.clear()
        filed.type(value)
    }

    Password()
    {
        const field=cy.get("#loginFrm_password")
        field.clear()
        filed.type(value)
        return this
    }

     submmit()
     {
        const button=cy.get("title='Login'")
        button.click()

     }


}


