describe('Add Dog View', () => {

  beforeEach(() => {
    cy.loadHome()
      .get('.add-dog-nav')
      .click()
  });

  it('Should have the header with a title, and 4 links', () => {
    cy.get('.title').should('include.text', 'Pawty Trainer')
      .get('.dashboard-nav').should('include.text', 'Dashboard')
      .get('.add-dog-nav').should('include.text', 'Add Dog')
      .get('.add-event-nav').should('include.text', 'Add Event')
      .get('.calendar-nav').should('include.text', 'Calendar')
  });

  it('Should have a form with a title, 3 inputs, and a button', () => {
    cy.get('.train-dog-title').should('include.text', 'Train your dog!')
      .get('.name-input').should('exist')
      .get('.age-input').should('exist')
      .get('.select-label').should('exist')
      .get('.select').should('exist')
      .get('.create-btn').should('exist')
  })

  it('Should submit a new dog', () => {
    cy.get('.name-input').should('have.value', '')
      .get('.name-input').type('Izzy')
      .get('.name-input').should('have.value', 'Izzy')

      .get('.age-input').should('have.value', '')
      .get('.age-input').type('12')
      .get('.age-input').should('have.value', '12')

      .get('.select').should('have.value', '')
      .get('.select').type('Golden Retriever')
  })

  it('Should show an error message if an input is missing', () => {
    cy.get('.name-input').should('have.value', '')
      .get('.name-input').type('Izzy')
      .get('.name-input').should('have.value', 'Izzy')

      .get('.age-input').should('have.value', '')
      .get('.age-input').type('12')
      .get('.age-input').should('have.value', '12')
      .get('.create-btn').click()
      .get('.create-dog-error').should('include.text', 'Sorry, you must input all fields before creating a dog!')
  })
});