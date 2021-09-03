import './EventCard.css';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_EVENT } from '../../utils/graph_mutations';
import { QUERY_EVERYTHING } from '../../utils/graph_queries'

export const EventCard = ({ event }) => {
  const [mutateEvent] = useMutation(UPDATE_EVENT, {
    refetchQueries:[QUERY_EVERYTHING]
  })

  const handleClick = () => {
    mutateEvent({
      variables: {
        eventId: event.id
      }
    })
  }

  return (
    <section key={event.id} className="event-card">
      <dl>
        <dt>Dog</dt>
        <dd>{event.dog.name}</dd>

        <dt>Event Name</dt>
        <dd>
          <Link to={`/event/${event.id}`} key={event.id} >{event.name}</Link>
        </dd>

        <dt>Event Date</dt>
        <dd>{(new Date(event.eventDatetime)).toLocaleString()}</dd>
      </dl>
      <input type='checkbox' id='complete' name='complete' value='true' onClick={() => handleClick()}></input>
        <label>Complete Event</label>
    </section>
  )
}