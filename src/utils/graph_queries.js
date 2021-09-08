import { gql } from "@apollo/client";

export const QUERY_EVERYTHING = gql`
  query {
    user(id: 3) {
      id
      name
    } dogs {
      id
      name
      breed
      age
    } events {
      id
      name
      completed
      eventDatetime
      dogId
        dog {
          name
          breed
          age
          userId
          user {
            name
        }
      }
    }
  }
`;