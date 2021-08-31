import './Calendar.css';
import { Link } from 'react-router-dom'
import { EventCard } from '../eventCard/EventCard'

export const Calendar = ({ events }) => {

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

  if (events.length) {
    return (
      <section className="calendar">
        <h2>Calendar!</h2>
        <section>{eventList}</section>
      </section>
    )
  } else {
    return (
      <section className="calendar">
        <h2>Calendar!</h2>
        <p>You have no events scheduled.</p>
      </section>
    )
  }
}