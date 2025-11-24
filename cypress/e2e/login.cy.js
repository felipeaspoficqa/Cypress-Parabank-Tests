import login from "../pages/login"

describe('Testes de Login e Logout', () => {
 
  it('Fazer login com sucesso', () => {
    login.fazerLoginComSucesso()
    
    login.verificarUrlOverview()
  })

  it('Tentar login com credenciais invalidas', () => {
    login.tentarLogarSemSucesso()

    login.verificarUrlLogin()
    login.verificarMensagemDeErro()
  })

  it('Fazer log out com sucesso', () => {
    login.fazerLoginComSucesso()
    login.clicarNoBotaoLogout()

    login.verificarUrlIndex()
  })
})

