import './Calendar.css';
import { EventCard } from '../eventCard/EventCard'

export const Calendar = ({ events }) => {

  let eventList = []
  if (events.length) {
    eventList = events.map(event => {
      return (
          <EventCard event={event} />
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