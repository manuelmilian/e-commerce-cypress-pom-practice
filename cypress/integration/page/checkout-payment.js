export class CheckoutPayment{

    cashOnDelivery(){
        cy.get(':nth-child(1) > tbody > .moduleRow > [align="right"] > input').click()
    }

    clickOnContinue(){
        cy.get('#tdb6 > .ui-button-text').click()
    }
}