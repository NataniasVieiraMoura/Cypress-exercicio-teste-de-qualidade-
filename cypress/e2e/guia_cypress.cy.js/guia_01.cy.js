<reference types = "Cypress"/> //-->Esse comando serve para ativar o cypress no código.
//Esse dois códigos abaixo fazem a mesma coisa:
//O botão Add only que aparece na estrutura do código serve para restringir um teste, seja para uma estrutura describe(context), seja para o caso de teste it.
//Para testar o código faça: ctrl + " e escreva "npx cypress open"
describe('', () => {
    //O it é o cenário de teste.
    beforeEach(() => {
        //Essa estrutura é executada antes de cada it
        cy.visit('...')
        cy.get('...').should('...','...')
    });
    it('Teste_Cadastro_Entradas', () => {
        /*Para poder mapear um elemento que você deseja utilizar é necessário que você
          busque uma caracteristica exclusiva para poder referênciar aqui. Para isso vo
          cê pode utilizar o f12 do navegador
        */
       cy.get('...').click()//Para clicar no butão(id + class)
       cy.get('...').type('...')//id
       cy.get('...').type(15)//atributos
       cy.get('...').type('17/02/2024') //Atributos(a data pode ser dia/mês/ano ou ano/mês/dia)
       cy.get('...').contains('nome no botão').click()//Tipo e valor
       cy.get('...').should('have.length',1)//Esse comando vai verificar o tamanho do elemento. No caso o tamanho esperado é 1
       cy.get('Barra(Caixa)deOpções').select('OpçãoEscolhida')//Escolhe a barra(caixa) de opções e seleciona a opção.
       cy.get('elemento A').should('contain','Nome_do_Elemento')//Ele verifica se o elemento contém(contain) o Nome_do_Elemento
       cy.contains('Nome_do_Elemento').click()//Essa é outra forma de fazer o mesmo que na linha 24.
       //'BUTTON'. Esse comando não estava sendo aceito pelo cypress porque outro elemento estava sobre o botão e porque o botão estava numa classe que estava em outra classe. Para resolver isso foi forçado o cypress aceitar com o {force : true} para que ele ignorasse o elemento ao clicar no botão => 'Btão'.
       cy.get('.Nome_da_Class_do_Botão').click({ force: true });
       //contain para contém e have.text para há exatamente no texto.
       cy.get('Elemento_de_Referência').should('have.text','Valor_Exato_Esperado')
       cy.Nome_da_Função(parametro_necessário_A, parametro_necessário_B)
    });
});
//Para fazer um teste completo de todos os casos de teste:
// Digite npx Cypress run
context('', () => {
    it('', () => {
        
    });
});
