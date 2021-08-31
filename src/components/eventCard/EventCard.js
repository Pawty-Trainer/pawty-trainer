import './EventCard.css';

export const EventCard = ({ event }) => {

  return (
    <section key={event.id} className="event-card">
      <dl>
        <dt>Event Name</dt>
        <dd>{event.name}</dd>

        <dt>Event Date</dt>
        <dd>{event.eventDatetime}</dd>

        <dt>Dog ID</dt>
        <dd>{event.dogId}</dd>
      </dl>
    </section>
  )
}