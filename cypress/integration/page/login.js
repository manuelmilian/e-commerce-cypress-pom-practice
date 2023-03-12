export class Login{

    email(text){
        cy.get(':nth-child(1) > .fieldValue > input').type(text)
    }

    password(text){
        cy.get(':nth-child(2) > .fieldValue > input').type(text)
    }

    clickOnSingIn(){
        cy.get('#tdb1 > .ui-button-text').click()
    }
}