class login{

    clicarNoBotaoLogout(){
        cy.get('a[href="logout.htm"]').click()
    }

    verificarUrlOverview(){
        cy.url().should('include', '/overview.htm')
    }

    verificarUrlLogin(){
        cy.url().should('include', '/login.htm')
    }

    verificarUrlIndex(){
        cy.url().should('include', '/index.htm')
    }

    verificarMensagemDeErro(){
        cy.get('h1').should('contain.text', 'Error!')
        cy.get('p').should('contain.text', 'The username and password could not be verified.')
    }
}
export default new login
