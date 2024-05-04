
describe('Os usuários devem realizar login', () => {
    let data;//variável criado
    before(()=>{
        cy.fixture('example').then((tData)=>{
            data = tData;//A variável data recebe os valores da pasta chamada tData
            cy.log(data.username)//Você chama cada variável da outra pasta
            cy.log(data.password)
        });
    });
    it('através da página da aplicação com sucesso', () => {
        cy.login(data.username, data.password)
    })
})