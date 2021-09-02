import { gql } from "@apollo/client";

export const ADD_NEW_DOG = gql`
  mutation ($name: String!, $userId: Int!, $breed: String!, $age: Int!) {
    createDog(input: {
        name: $name,
        userId: $userId,
        breed: $breed,
        age: $age
  }) {
      dog {
        id
        userId
        name
        breed
        age
      }
      errors
    }
  }
`;

export const DELETE_DOG = gql`
  mutation ($id: ID!) {
    destroyDog(input: {
      id: $id
    }) {
      id
    }
  }
`;

export const ADD_NEW_EVENT = gql`
  mutation ($name: String!, $dogId: Int!, $eventDatetime: ISO8601DateTime!){
    createEvent(input: {
      name: $name,
      dogId: $dogId,
      completed: false,
      eventDatetime: $eventDatetime,  
  }) {
      event {
        id
        dogId
        name
        completed
        eventDatetime
      }
      errors
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation ($eventId: ID!){
    updateEvent(
      input: { 
        id: $eventId, 
        completed: true 
      }) {
        event {
          id
          name
          completed
          dogId
            dog {
              id
              name
              breed
              age
                user {
                  name
                }
        }
      }
    }
  }
`