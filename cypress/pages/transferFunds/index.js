class transferencias{

    acessarAPaginaDeTransferencias(){
        cy.get('a[href="transfer.htm"]').click()
    }

    preencherQuantiaASerTransferida(){
        cy.get('#amount').type('1')
    }

    selecionarContaDeOrigem(){
        cy.get('select[id="fromAccountId"]').select('16341')
    }

    selecionarContaDeDestino(){
        cy.get('select[id="toAccountId"]').select('21336')
    }

    clicarNoBotaoTransferir(){
        cy.get('input[value="Transfer"]').click()
    }

    transferirFundosComSucesso(){
        this.acessarAPaginaDeTransferencias()
        this.preencherQuantiaASerTransferida()
        this.selecionarContaDeOrigem()
        this.selecionarContaDeDestino()
        this.clicarNoBotaoTransferir()
    }

    verificarMensagemDeTransferenciaConcluida(){
        cy.contains('h1', 'Transfer Complete!')
        cy.contains('p', '$1.00 has been transferred from account #16341 to account #21336.')
    }

    verificarSeODinheiroFoiTransferidoCorretamente(){
        cy.get('a[href="overview.htm"]').click()
        cy.contains('td', '$1.00')
    }

    limparOTeste(){
        cy.get('a[href="transfer.htm"]').click()
        cy.url().should('include', 'transfer.htm')
        cy.get('input[id="amount"]').type('1')
        cy.get('select[id="fromAccountId"]').select('21336')
        cy.get('select[id="toAccountId"]').select('16341')
        cy.get('input[value="Transfer"]').click()
        cy.contains('h1', 'Transfer Complete!')
        cy.contains('p', '$1.00 has been transferred from account #21336 to account #16341.')
    }
}
export default new transferencias