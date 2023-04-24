// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//.
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types = "Cypress" /> 
/// <reference types= "Cypress-xpath" />

// Cypress.Commands.add('login',(email,password)=>{
//     cy.visit('https://staging-app.eosaregion.com/')
//     cy.get('.d-flex > .text-uppercase').click()
//     cy.get("[type='email']").type(email)
//     cy.get("[type='password']").type(password)
//     cy.get("[type='submit']").click()
// })

// Cypress.Commandduologues.add('Loginweb',(name,lastname,email,comment)=>{
//     cy.get('[name="first_name"]').type(name)
//     cy.get("[placeholder='Last Name']").type(lastname)
//     cy.get(" [placeholder='Email Address']").type(email)
//     cy.get("[placeholder='Comments']").type(comment)
//     cy.get("[value='SUBMIT']").click()
// })
require('@cypress/xpath');
 
 require('@4tw/cypress-drag-drop')
// require('@4tw/cypress-drag-drop')
