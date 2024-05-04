// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './loginComands'//Esse comando vai adicionar a função que você criou num arquivo js para o cypress acessar(para o cypress saber que ela existe e busca-la quando tu chama-la no código end2end).
import './compra_comands'

// Alternatively you can use CommonJS syntax:
// require('./commands')