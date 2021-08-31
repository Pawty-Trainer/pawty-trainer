import './Event.css';

export const Event = ({ matchingEvent }) => {

  return (
    <section className="event">
      <dl>
        <dt>Event Name</dt>
        <dd>{matchingEvent.name}</dd>

        <dt>Event Date</dt>
        <dd>{matchingEvent.eventDatetime}</dd>

        <dt>Dog ID</dt>
        <dd>{matchingEvent.dogId}</dd>
      </dl>
    </section>
  )
}