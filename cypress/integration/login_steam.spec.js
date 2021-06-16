describe('Cypress tests introduction', () => {
    it('Login Steam', () => {
        cy.visit('https://store.steampowered.com/login/?redir=%3Fl%3Dportuguese&redir_ssl=1&snr=1_4_4__global-header');

        cy.get('#input_username').focus().type('admin');

        cy.get('#input_password').focus().type('password');

        cy.get('.btn_blue_steamui > span').click();

        cy.get('#error_display').invoke("text").should('eq', 'Credenciais incorretas.')
    });
});