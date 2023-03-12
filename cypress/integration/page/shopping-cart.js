export class ShoppingCart{

    updateQty(qty){
        cy.get('[valign="top"] > [type="text"]').clear()
        cy.get('[valign="top"] > [type="text"]').type(qty+"{enter}")
    }

    clickOnCheckout(){
        cy.get('#tdb5 > .ui-button-text').click()
    }
}