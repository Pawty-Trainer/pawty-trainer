import { gql } from "@apollo/client";

export const QUERY_EVERYTHING = gql`
  query {
    user(id: 1) {
      id
      name
    } dogs {
      id
      name
      breed
      age
    } events {
      id
      dogId
      name
      eventDatetime
    }
  }
`;