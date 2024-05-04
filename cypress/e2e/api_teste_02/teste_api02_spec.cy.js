/// <reference types = "Cypress"/>
describe('Os usuários devem realizar login', () => {
    let data;//variável local
    before(()=>{//before é um bloco que será executado antes dos demais its
        cy.fixture('example').then((tData)=>{//aqui a função retorna valores da pasta example
            data = tData;
        })
    })
    it('através da página da aplicação com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://curso-automacao-user-service.herokuapp.com/auth',
            headers:{
                "Content-type" : "application/json" 
            },
            body :{
                username: data.username,
                password: data.password
            }
        }).then((response) =>{
            expect(response.status).to.eq(200)//ou .equal(200)
        })
    });
});
//para fazer o teste de apenas bloco de testes digite :  npx cypress run --e2e "cypress/e2e/api/api_login.cy.js"