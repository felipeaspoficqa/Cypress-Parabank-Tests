import login from "../pages/login"
import accountsOverview from "../pages/accountsOverview"

describe('Teste nas contas criadas pelo usuario', () => {

    beforeEach(() => {
        login.fazerLoginComSucesso()
        accountsOverview.acessarContasDoUsuario()
    })

    it('Listar todas as contas do usuario', () => {
        accountsOverview.verificarUrlOverview()
        accountsOverview.verificarSeTodasAsContasEstaoListadas()
    })  

    it('Mostrar os detalhes da conta selecionada', () => {  
        accountsOverview.acessarOsDetalhesDeUmaConta()
        accountsOverview.verificarUrlActiviy() 
    })

    it('Mostrar os detalhes de uma transação', () => {
        accountsOverview.acessarOsDetalhesDeUmaConta()
        accountsOverview.acessarOsDetalhesDeUmaTransaçao()
        accountsOverview.verificarUrlTrasaction()
    })


})
