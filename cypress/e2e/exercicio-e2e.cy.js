/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    produtosPage.addProduto('Ingrid Running Jacket', 'M', 'Orange', 2)
    produtosPage.addProduto('Augusta Pullover Jacket', 'S', 'Blue', 1)
    produtosPage.addProduto('Josie Yoga Jacket', 'XS', 'Black', 2)
    produtosPage.addProduto('Circe Hooded Ice Fleece', 'L', 'Green', 1)
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get(`.view-cart`).eq(1).click()
    cy.get('.checkout-button').click()
    cy.fixture('checkout').then((checkout) => {
      cy.get('#billing_first_name').type(checkout.nome)
      cy.get('#billing_last_name').type(checkout.sobrenome)
      cy.get('#billing_address_1').type(checkout.endereço)
      cy.get('#billing_city').type(checkout.cidade)
      cy.get('#billing_postcode').type(checkout.cep)
      cy.get('#billing_phone').type(checkout.telefone)
      cy.get('#billing_email').type(checkout.email)
      
    })
    cy.get(`.select2-selection__arrow`).eq(1).click()
    cy.get('.select2-search__field').type('Mato Grosso do Sul')
    cy.get(`[class="select2-results__option select2-results__option--highlighted"]`).click()
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
  });


})
