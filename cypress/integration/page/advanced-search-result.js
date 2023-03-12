export class AdvancedSearchResult {

    clickOnProduct(){
        cy.get('.productListingData > tbody > tr > :nth-child(2) > a').click()
    }


}