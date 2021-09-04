Cypress.Commands.add('loadHome', () => {
  const now = new Date("2022-01-01T01:01:01.449Z")
  cy.intercept('POST', 'https://pawty-trainer-api.herokuapp.com/graphql', 
      { statusCode: 200, fixture: 'user_query.json' })
    .intercept('GET', 'https://api.thedogapi.com/v1/breeds', 
      { statusCode: 200, fixture: 'dog_breeds.json' })
    .clock(now)
    .visit('http://localhost:3000')
});

Cypress.Commands.add('loadCalendar', () => {
  const now = new Date("2022-01-01T01:01:01.449Z")
  cy.intercept('POST', 'https://pawty-trainer-api.herokuapp.com/graphql', 
      { statusCode: 200, fixture: 'user_query.json' })
    .intercept('GET', 'https://api.thedogapi.com/v1/breeds', 
      { statusCode: 200, fixture: 'dog_breeds.json' })
    .clock(now)
    .visit('http://localhost:3000')
    .get('nav').children('a').eq(3).click()
});

Cypress.Commands.add('loadNoData', () => {
  cy.intercept('POST', 'https://pawty-trainer-api.herokuapp.com/graphql', 
      { statusCode: 200, fixture: 'no_data.json' })
    .intercept('GET', 'https://api.thedogapi.com/v1/breeds', 
      { statusCode: 200, fixture: 'dog_breeds.json' })
    .visit('http://localhost:3000')
});