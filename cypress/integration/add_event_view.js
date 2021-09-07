describe('Add Event View', () => {

  beforeEach(() => {
      cy.loadHome()
        .get('.add-event-nav')
        .click()
    });

  it('Should have the header with a title, and 4 links', () => {
    cy.get('.title').should('include.text', 'Pawty Trainer')
      .get('.dashboard-nav').should('include.text', 'Dashboard')
      .get('.add-dog-nav').should('include.text', 'Add Dog')
      .get('.add-event-nav').should('include.text', 'Add Event')
      .get('.calendar-nav').should('include.text', 'Calendar')
  });

  it('Should have a form with a title, 3 inputs, and a submit button', () => {
    cy.get('.event-title').should('include.text', 'Add New Event!')
      .get('.event-name-input').should('exist')
      .get('.select-dog-input').should('exist')
      .get('.select-dog-label').should('exist')
      .get('.set-date-input').should('exist')
      .get('.event-submit-btn').should('exist')
  });

  it('Should submit a new event', () => {
    cy.get('.event-name-input').should('have.value', '')
      .get('.event-name-input').type('Shake')
      .get('.event-name-input').should('have.value', 'Shake')

      .get('.select-dog-input').should('have.value', '0')
      .get('.select-dog-input').select('Gandolf')
      .get('.select-dog-input').should('have.value', '1')

      .get('.set-date-input').should('have.value', '')
      .get('.set-date-input').type('2021-09-15')
  })

  it('Should show an error message if an input is missing', () => {
    cy.get('.event-name-input').should('have.value', '')
      .get('.event-name-input').type('Shake')
      .get('.event-name-input').should('have.value', 'Shake')

      .get('.select-dog-input').should('have.value', '0')
      .get('.select-dog-input').select('Gandolf')
      .get('.select-dog-input').should('have.value', '1')
      .get('.event-submit-btn').click()
      .get('.event-error-msg').should('include.text', 'Sorry, you must input all fields before creating an event!')
  })
})