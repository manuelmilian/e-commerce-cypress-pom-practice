export class Catalog {

    quickFind(text){
        cy.get('[type="text"]').type(text+"{enter}")
    }
}