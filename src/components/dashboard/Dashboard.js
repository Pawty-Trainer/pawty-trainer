import './Dashboard.css';
import { Link } from 'react-router-dom'
import { EventCard } from '../eventCard/EventCard'

export const Dashboard = ({ userName, dogs, events }) => {

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

  events.splice(2)
  let eventList = []
  if (events.length) {
    eventList = events.map(event => {
      return (
        <Link to={`/event/${event.id}`} key={event.id} >
          <EventCard event={event} />
        </Link>
      )
    })
  }

  if (dogs.length && events.length) {
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
            {eventList}
          </section>

        </section>
      </section>
    )
  } if (dogs.length && !events.length) {
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
            <h3>No Upcoming Events</h3>
          </section>

        </section>
      </section>
    )
  } if (!dogs.length && events.length) {
    return (
      <section className="dashboard">
        <h2>Welcome {userName}!</h2>
  
        <section>
          
          <section>
            <h3>Add a dog!</h3>
          </section>
  
          <section>
            <h3>Upcoming Events</h3>
            {eventList}
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
            <h3>No Upcoming Events</h3>
          </section>
        </section>
      </section>
    )
  }
}