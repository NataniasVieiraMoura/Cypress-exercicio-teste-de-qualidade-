/// <reference types = "Cypress"/>
//Aqui você vai criar as funções necessárias para fazer atividades repetitivas.
Cypress.Commands.add('login_teste',(user, password)=>{
    cy.visit("https://www.saucedemo.com/v1/")//Aqui tu pede para ele abrir o site que deseja visitar.
    cy.get('[data-test="username"]').type(user)//preenche campo usuário
    cy.get('[data-test="password"]').type(password)//preenche campo senha
    cy.get('#login-button').click()
})