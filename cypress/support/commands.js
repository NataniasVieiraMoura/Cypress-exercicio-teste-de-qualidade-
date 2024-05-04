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
//
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


Cypress.Commands.add('login',(username,password) => {
    cy.visit('http://curso-automacao-web-app.herokuapp.com/login')
    cy.get("input[id='yourUsername'").type(username)
    cy.get("input[id='yourPassword'").type(password)
    cy.get("button[id='logginButton'").click()
    cy.contains('h1','Dashboard')
    //Verificar a página que é direcionada através da verificação de um elemento presente nela. Lembre-se que esse elemento referênciado não pode se repetir no código que foi tirado.
})

Cypress.Commands.add('new_user',(name, username, password,roles)=>{

})