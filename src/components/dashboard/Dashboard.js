import './Dashboard.css';
import { Link } from 'react-router-dom'
import { EventCard } from '../eventCard/EventCard'
import  bone from '../../resources/bone.png'

export const Dashboard = ({ userName, dogs, events, completedEvents }) => {
  let dogList = []
  if (dogs.length) {
    dogList = dogs.map(dog => {
      return (
        <li key={dog.id}>
          <img className='bone'src={bone} />
          <Link to={`/dog/${dog.id}`}>
            {dog.name}
          </Link>
        </li>
      )
    })
  }

  let eventList = []
  if (events.length) {
    let twoEvents = [...events]
    twoEvents.splice(2)
    eventList = twoEvents.map(event => {
      return (
        <EventCard event={event} key={event.id} />
      )
    })
  }

  let rewards = []
  if (completedEvents) {
    rewards = ["★"]
    for (var i = 1; i < completedEvents; i++) {
      if (!(i % 3)) {
        rewards = [...rewards, "★"];
      }
    }
  }

  if (dogs.length && events.length) {
    return (
      <section className="dashboard">
        <h2>Welcome {userName}!</h2>
        <p>{rewards}</p>
  
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