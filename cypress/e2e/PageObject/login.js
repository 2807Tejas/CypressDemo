export class Login{

    getUserName(){
       return cy.get('#loginFrm_loginname')
    }

    getPassword(){
        return cy.get('#loginFrm_password')
    }

    getSumnitButton(){
        return cy.get("[title='Login']")
    }
}