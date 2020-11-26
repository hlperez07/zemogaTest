export function searchCruises(){
    cy.visit("https://www.carnival.com/");
    cy.get("div.vifp-close").click({force: true}); //iframe solution
    cy.get("#cdc-durations").click();
    cy.get(".cdc-filter-button").eq(1).click();
    cy.get("#cdc-destinations").click();
    cy.get(".cdc-filter-button").eq(1).click({force: true});
    cy.get("#cdc-ports").click();
    cy.get(".cdc-filter-button").eq(0).click({force: true});
    cy.get("#cdc-dates").click();
    cy.get(':nth-child(2) > :nth-child(9) > .cdc-filter-button').click({force: true});
    cy.get(".cdc-filters-tab--searchcta").click();
    cy.get('.ccs-search-results').should('be.visible');
    cy.get('ccl-view-result-grid.ng-scope > :nth-child(1)').should('be.visible'); //At least exist 1 result
    
}