import PropTypes from 'prop-types';
import './Calendar.css';
import { EventCard } from '../eventCard/EventCard'

export const Calendar = ({ events }) => {

  let eventList = []
  if (events.length) {
    eventList = events.map(event => {
      return (
        <EventCard event={event} key={event.id} />
      )
    })
  }

  if (events.length) {
    return (
      <section className="calendar">
        <h2>Calendar</h2>
        <section>{eventList}</section>
      </section>
    )
  } else {
    return (
      <section className="calendar">
        <h2>Calendar</h2>
        <p>You have no events scheduled.</p>
      </section>
    )
  }
}

Error.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
};