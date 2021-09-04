describe('Dashboard View', () => {

  beforeEach(() => {
    cy.loadHome()
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
    cy.get('h2').contains('Welcome Frodo!')
  });

  it('It should display the user\'s earned rewards', () => {
    cy.get('.dashboard').children('p').eq(0).contains('★')
  });

  it('It should show a list of the user\'s dogs', () => {
    cy.get('li').should('have.length', 2)
      .get('li').eq(0).contains('Gandolf')
      .get('li').eq(1).contains('Legolas')
  });

  it('Clicking on a dog should take the user to a dog details page', () => {
    cy.get('li').eq(0).click()
    cy.url().should('include', '/dog/1')
      .get('dl').children('dd').eq(0).contains('Gandolf')
      .get('dl').children('dd').eq(1).contains('100')
      .get('dl').children('dd').eq(2).contains('Wizard')
  });

  it('A user should be able to delete a dog', () => {
    cy.get('li').eq(0).click()
    cy.get('button').click()
    cy.get('li').should('have.length', 1)
  });

  it('A user should see the next two chronological events', () => {
    cy.get('.event-card').children('dl').should('have.length', 2)
      .get('.event-card').children('dl').eq(0).children('dd').eq(2).contains('1/27/2022')
      .get('.event-card').children('dl').eq(1).children('dd').eq(2).contains('3/27/2022')
  });

  it('Clicking an event name should take the user to an event details page', () => {
    cy.get('.event-card').children('dl').eq(0).children('dd').eq(1).click()
    cy.url().should('include', '/event/1')
      .get('dd').eq(0).contains('Gandolf')
      .get('dd').eq(1).contains('journey to Mount Doom')
      .get('dd').eq(2).contains('1/27/2022')
  });

  // this test is ineffective because I don't know how to update stub happening at same endpoint
  // a mutation is what's needed to update BE, that will cause our FE to rerender,
  // which will grab the same stub (i.e. nothing updated)
  // it('A user should be able to complete an event, and it should disappear', () => {
  //   cy.get('.event-card').children('input').eq(0).click()
  //   cy.get('dl').eq(0).children('dd').eq(1).contains('Ents storm Isengard')
  // });

  // this test is ineffective because I don't know how to update stub happening at same endpoint
  // a mutation is what's needed to update BE, that will cause our FE to rerender,
  // which will grab the same stub (i.e. nothing updated)
  // it('Completing 3 events should give the user a reward', () => {
  //   cy.get('.event-card').children('input').eq(0).click()
  //   cy.get('.event-card').children('input').eq(0).click()
  //   cy.get('.event-card').children('input').eq(0).click()
  //   cy.get('.dashboard').children('p').eq(0).contains('★★')
  // });

});