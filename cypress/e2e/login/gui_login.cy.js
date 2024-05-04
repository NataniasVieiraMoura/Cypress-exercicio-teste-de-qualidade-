/// <reference types = "Cypress"/>

//Obs:Usar navegador Electron, por que o anti-vírus atrapalha nos demais.
//Logo após, vá ao  terminal e digite npx cypress open para ver funcionar.
describe('Teste funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login_teste('standard_user','secret_sauce')//esse comando chama a função, não esqueça que há variáveis obrigatórias que a função exige, como usuário e senha.
        cy.get('.product_label').should('contain','Products')
    });
    //Todo o código normal foi reduzido escrevendo uma função padrão:
    //Agora para testar basta inserir os dados desejados(no caso: um usuário errado)
    it('Validando login incorreto', () => {
        cy.login_teste('nome_incorreto','secret_sauce')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });
    //Agora uma senha incorreta
    it('Verificando senha incorreta', () => {
        cy.login_teste('standard_user','senha_incorreta')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    });
    //Abaixo forma padrão de fazer testes.
    /*
    it('Validando login incorreto', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user1")//preenche campo usuário com erro
        cy.get('[data-test="password"]').type("secret_sauce")//preenche campo senha sem erro
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')   
    });
    */
    /*
    it('Validando senha incorreta', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")//preenche campo usuário sem erro
        cy.get('[data-test="password"]').type("secret_sauce1")//preenche campo senha com erro
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')//.should =>  para verificar se o texto é retornado
       
    });
    */
});