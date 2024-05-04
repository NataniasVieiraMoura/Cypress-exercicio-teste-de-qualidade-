/// <reference types = "Cypress"/>
//Para abrir o terminal click Ctrl + "


describe('API-Teste funcional de login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: 	
                {
                    "email": "fulano@qa.com",
                    "password": "teste"
                }
        }).then((response)=>{
            expect(response.status).to.equal(200)//pode testar com 200
            expect(response.body.message).to.equal("Login realizado com sucesso")
        })
        })
    it('Deve validar senha incorreta', () => {
        cy.request({
            method: 'POST',
            url:'http://localhost:3000/login',
            body:{
                "email":"fulano@qa.com",
                "password":"senha_incorreta"
            },
            failOnStatusCode: false//esse comando desativa a auto análise do cypress
        }).then((response)=>{
            expect(response.status).to.equal(401)//Teste de mensagem de erro correto
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });
});