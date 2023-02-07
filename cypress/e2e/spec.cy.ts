describe('Test Meal finder', () => {
  it('should open', () => {
    cy.visit('http://localhost:3000/')
  });
  it('should type Pasta', () => {
    cy.visit('http://localhost:3000/')
        .get('#txInput')
        .type("Pasta")
        .should('have.value', 'Pasta');

  });
  it('should search for Pasta', () => {
    cy.visit('http://localhost:3000/')
        .get('#txInput')
        .type("Pasta")
        .get('#btSearchByName')
        .click()
        .get('#taOutput')
        .contains('Pasta');
  });
  it('should search by first letter', () => {
    cy.visit('http://localhost:3000/')
        .get('#txInput')
        .type('P')
        .get('#btSearchByFirstLetter')
        .click()
        .get('#taOutput')
        .should('not.be.empty');
  });
  it('should get a random meal',  () => {
    cy.visit('http://localhost:3000/')
        .get('#btGetRandomMeal')
        .click()
        .get('#taOutput')
        .should('not.be.empty');
  });
  it('should get the details of a meal with the id (52772)',  () => {
    cy.visit('http://localhost:3000/')
        .get('#txInput')
        .type('52772')
        .get('#btGetMealById')
        .click()
        .get('#taOutput')
        .should('not.be.empty');
  });
  it('should show meals with main ingredient (chicken_breast)',  () => {
    cy.visit('http://localhost:3000/')
        .get('#txInput')
        .type('chicken_breast')
        .get('#btFilterMealsByMainIngredient')
        .click()
        .get('#taOutput')
        .contains('chicken',{ matchCase: false });
  });
})