Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('loginTeste', (email, senha) => {
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
});

