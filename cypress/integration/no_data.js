describe('No Data', () => {

  beforeEach(() => {
    cy.loadNoData()
  });

  it('The page should have a header', () => {
    cy.get('h1').should('have.length', 1)
  });

  it('Inside that header there should be the App\'s name', () => {
    cy.get('h1').contains('Pawty Trainer')
  });

  it('There should be links to the 4 main views', () => {
    cy.get('nav').children('a').should('have.length', 4)
    cy.get('nav').children('a').eq(0).should('have.attr', 'href').and('includes', '/')
    cy.get('nav').children('a').eq(1).should('have.attr', 'href').and('includes', '/create')
    cy.get('nav').children('a').eq(2).should('have.attr', 'href').and('includes', '/add_event')
    cy.get('nav').children('a').eq(3).should('have.attr', 'href').and('includes', '/calendar')
  });

  it('It should greet the user', () => {
    cy.get('h2').contains('Welcome Bilbo!')
  });

  it('The site should tell the user to add a dog', () => {
    cy.get('h3').eq(0).contains('Add a dog!')
  });

  it('The site should tell the user that there are no upcoming events', () => {
    cy.get('h3').eq(1).contains('No Upcoming Events')
  });

  it('The calendar page should tell the user that there are no upcoming events', () => {
    cy.get('nav').children('a').eq(3).click()
    cy.get('p').contains('You have no events scheduled.')
  });

});