import './Dashboard.css';
import { Link } from 'react-router-dom'

export const Dashboard = ({ userName, dogs }) => {

  let dogList = []
  if (dogs.length) {
    dogList = dogs.map(dog => {
      return (
        <li key={dog.id}>
          <Link to={`/dog/${dog.id}`}>
            {dog.name}
          </Link>
        </li>
      )
    })
  }

  if (dogs.length) {
    return (
      <section className="dashboard">
        <h2>Welcome {userName}!</h2>
  
        <section>
          <section>
            <h3>My Dogs</h3>
            <ul>
              {dogList}
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
  } else {
    return (
      <section className="dashboard">
        <h2>Welcome {userName}!</h2>
  
        <section>
          <section>
            <h3>Add a dog!</h3>
          </section>
  
          <section>
          </section>
        </section>
      </section>
    )
  }
}