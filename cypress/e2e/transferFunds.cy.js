import login from "../pages/login"
import transferFunds from "../pages/transferFunds"

describe('Testes de realização de transferencias', () => {

    beforeEach(() => {
        login.fazerLoginComSucesso()
    })

    afterEach(() => {
        //Limpeza
        transferFunds.limparOTeste()
    })

    it('Realizar transferencia com sucesso', () => {
        transferFunds.transferirFundosComSucesso()
        transferFunds.verificarMensagemDeTransferenciaConcluida()
        transferFunds.verificarSeODinheiroFoiTransferidoCorretamente()
    })
})