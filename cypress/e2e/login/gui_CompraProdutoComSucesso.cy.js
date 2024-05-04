/// <reference types = "Cypress"/>


describe('Teste End2End : Realizando a compra de produtos com sucesso', () => {
    it('Fluxo de compra de produtos', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get(':nth-child(1) > .inventory_item_label').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain','Sauce Labs Bolt T-Shirt')
       
        cy.contains('Sauce Labs Onesie').click()
        //Abaixo o valor do get é uma classe específica(que não se repete), por isso o ponto. 
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click({ force: true });
        

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click({force: true});
        
        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click({force: true});

        //Checagem da quantidade de produtos adicionados ao carrinho:
        //Abaixo usa-se should com have.text, pois esse especifica o que deseja checar.
        cy.get('.fa-layers-counter').should('have.text', '3')//verificar se há exclusivamente 3
        cy.get('.fa-layers-counter').click()//entrar no carrinho
        
          /*
        cy.get(':nth-child(3) > .cart_item_label').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label').should('contain','Sauce Labs Bolt T-Shirt')*/
        //O comando acima foi reduzido para:
        cy.verificador()
        
        cy.get('.btn_action').click()
        
        //inserindo dados abaixo
        cy.get('[data-test="firstName"]').type('Teste Primeiro nome')
        cy.get('[data-test="lastName"]').type('Teste Ultimo nome')
        cy.get('[data-test="postalCode"]').type('5656562689')

        cy.get('.btn_primary').click()//continuar
        //Abaixo verificando produtos:

        cy.verificador()

        //Abaixo verificação de dados de compra:
        cy.get('.summary_subtotal_label').should('have.text','Item total: $33.97')
        cy.get('.summary_tax_label').should('have.text','Tax: $2.72')
        cy.get('.summary_total_label').should('have.text','Total: $36.69')

        cy.get('.btn_action').click()
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
    });
});
