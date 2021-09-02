import './EventCard.css';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

const UPDATE_EVENT = gql`
  mutation ($eventId: ID!){
    updateEvent(
      input: { 
        id: $eventId, 
        completed: true 
      }) {
        event {
          id
          name
          completed
          dogId
            dog {
              id
              name
              breed
              age
                user {
                  name
                }
        }
      }
    }
  }
`
export const EventCard = ({ event }) => {
  const [mutateEvent] = useMutation(UPDATE_EVENT)

  const handleClick = () => {
    mutateEvent({
      variables: {
        eventId: event.id
      }
    })
  }
  console.log(event,'event')
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