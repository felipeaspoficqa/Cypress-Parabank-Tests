class contas{

    acessarContasDoUsuario(){
        cy.get('a[href="overview.htm"]').click()
    }

    acessarOsDetalhesDeUmaConta(){
        cy.get('a[href="activity.htm?id=16341"]').click()
    }

    acessarOsDetalhesDeUmaTransaçao(){
        cy.get('a[href="transaction.htm?id=21247"]').click()
    }

    verificarUrlOverview(){
        cy.url().should('include', '/overview.htm')
    }

    verificarUrlActiviy(){
        cy.url().should('include', 'activity.htm')
    }

    verificarUrlTrasaction(){
        cy.url().should('include', 'transaction.htm')
    }

    verificarSeTodasAsContasEstaoListadas(){
        cy.get('a[href="activity.htm?id=16341"]').should('be.visible')
         cy.get('a[href="activity.htm?id=21336"]').should('be.visible')
         cy.get('a[href="activity.htm?id=35100"]').should('be.visible')
    }
}
export default new contas