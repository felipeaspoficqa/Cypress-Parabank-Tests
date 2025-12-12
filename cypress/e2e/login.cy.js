import login from "../pages/login"

describe('Testes de Login e Logout', () => {
 
  it('Fazer login com sucesso', () => {
    cy.visitar()
    cy.submeterLogin('felip99', '123456')
    
    login.verificarUrlOverview()
  })

  it('Tentar login com credenciais invalidas', () => {
    cy.visitar()
    cy.submeterLogin('invalidUser', 'invalidPassword')

    login.verificarUrlLogin()
    login.verificarMensagemDeErro()
  })

  it('Fazer log out com sucesso', () => {
    cy.visitar()
    cy.submeterLogin('felip99', '123456')
    login.clicarNoBotaoLogout()

    login.verificarUrlIndex()
  })
})


