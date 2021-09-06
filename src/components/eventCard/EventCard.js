import PropTypes from 'prop-types';
import './EventCard.css';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_EVENT } from '../../utils/graph_mutations';
import { QUERY_EVERYTHING } from '../../utils/graph_queries';

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
      <ul>
        <li className="dog-name">{event.dog.name}</li>
        <li className='event-name'>
          <Link to={`/event/${event.id}`} key={event.id}>
            <em>{event.name}</em>
          </Link>
        </li>
        <li className='card-title event-date'>
          To be completed by {(new Date(event.eventDatetime)).toLocaleString()}
        </li>
        <li>
          <input type='checkbox' id={event.id} value='true' onClick={() => handleClick()}></input>
          <label for={event.id} className='complete-title' >Complete Event</label>
        </li>
      </ul>
    </section>
  )
}

Error.propTypes = {
  event: PropTypes.object.isRequired
};