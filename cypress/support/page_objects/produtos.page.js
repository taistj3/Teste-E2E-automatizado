class produtosPage {


    addProduto( nomeProduto, tamanho, cor, quantidade){
        cy.get(' .product-block ').contains(nomeProduto).click()
        cy.get(`.button-variable-item.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.logo-in-theme > .logo > a > .logo-img').click()
    }
        

}

export default new produtosPage()