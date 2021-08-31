import './AddEvent.css';
import { useState} from 'react';
import { useMutation, gql } from "@apollo/client";

const ADD_NEW_EVENT = gql`
  mutation ($name: String!, $dogId: Int!, $completed: Boolean!, $eventDatetime: String!){
    createEvent(input: {
      name: $name,
      dogId: $dogId,
      completed: $completed,
      eventDatetime: $eventDatetime
  }) {
      event {
        id
        dogId
        name
        completed
        eventDatetime
      }
      errors
    }
  }
  `;
export const AddEvent = ({userID}) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [completed, setComplete] = useState(false)
  const [error, setError] = useState('');
  const [addNewEvent] = useMutation(ADD_NEW_EVENT)

  const submitEvent = event => {
    event.preventDefault();
    setComplete(true);
    if(eventName && eventDate) {
    addNewEvent({
      variables: {
        dogId: userID,
        name: eventName,
        eventDatetime: eventDate
      }
    })
     clearError()
     clearInputs()
    } else {
      setError('Sorry, you must input all fields before creating an event!')
    }
  }
  const clearInputs = () => {
    setEventName('');
    setEventDate('');
    setComplete(false)
  }
  
  const clearError = () => {
    setError('')
  }

  return (
    <>
      <form>
        <h1>Add New Event</h1>
        <input
          type='text'
          placeholder='Event Name'
          value={eventName}
          onChange={(event)=> setEventName(event.target.value)}
          required
        />
        <label>Set event date:</label>
        <input
          type='date'
          placeholder='EventDateTime'
          value= {eventDate}
          onChange={(event)=> setEventDate(event.target.value)}
          required
        />
        <button onClick={event=> submitEvent(event)}>Submit</button>
      </form>
    </>
  )
}