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
        <dt>Event Name</dt>
      <Link to={`/event/${event.id}`} key={event.id} >
        <dd>{event.name}</dd>
      </Link>

        <dt>Event Date</dt>
        <dd>{event.eventDatetime}</dd>

        <dt>Dog ID</dt>
        <dd>{event.dogId}</dd> 
      </dl>
      <input type='checkbox' id='complete' name='complete' value='true' onClick={() => handleClick()}></input>
        <label>Complete Event</label><br></br>  
    </section>
  )
}