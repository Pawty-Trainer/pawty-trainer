import './Dashboard.css';
import { useQuery, gql } from "@apollo/client";
import { Error } from '../error/Error'

export const Dashboard = ({ userID }) => {

  const { loading, error, data } = useQuery(gql`
    query {
      user(id: ${userID}) {
        id
        name
      }
    }
  `);

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  if (error) {
    return (
      <Error errorCode={error} />
    )
  }

  if (data) {
    return (
      <p>Data...</p>
    )
  }

}