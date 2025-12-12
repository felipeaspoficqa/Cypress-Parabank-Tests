import transferFunds from "../pages/transferFunds"

describe('Testes de realização de transferencias', () => {

    beforeEach(() => {
        cy.visitar()
        cy.submeterLogin('felip99', '123456')
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