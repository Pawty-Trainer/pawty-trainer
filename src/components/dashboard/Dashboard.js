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
    console.log(data)
    return (
      <section className="dashboard">
        <h2>Welcome {data.user.name}!</h2>

        <section>
          <section>
            <h3>My Dogs</h3>
            <ul>
              <li>Fifi</li>
            </ul>
          </section>

          <section>
            <h3>Upcoming Events</h3>
            <dl>
              <dt>Today</dt>
              <dd>6pm - Sit with Fifi</dd>

              <dt>Tomorrow</dt>
              <dd>4pm - Play with Fifi</dd>
            </dl>
          </section>
        </section>
      </section>
    )
  }

}