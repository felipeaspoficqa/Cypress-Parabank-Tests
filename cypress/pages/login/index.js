class login{

    visitarPaginaInicialDoParabank(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    }

    preencherCredenciaisValidas(){
        cy.get('input[name="username"]').type('felip99')
        cy.get('input[name="password"]').type('123456')
    }

    clicarNoBotaoLogin(){
        cy.get('input[value="Log In"]').click()
    }

    fazerLoginComSucesso(){
        this.visitarPaginaInicialDoParabank()
        this.preencherCredenciaisValidas()
        this.clicarNoBotaoLogin()
    }

    preencherCredenciaisInvalidas(){
        cy.get('input[name="username"]').type('invalidUser')
        cy.get('input[name="password"]').type('invalidPasswprd')
    }

    tentarLogarSemSucesso(){
        this.visitarPaginaInicialDoParabank()
        this.preencherCredenciaisInvalidas()
        this.clicarNoBotaoLogin()
    }

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
