import './AddEvent.css';
import { useState } from 'react';
import { useMutation, gql } from "@apollo/client";

const ADD_NEW_EVENT = gql`
  mutation ($name: String!, $dogId: Int!, $eventDatetime: ISO8601DateTime!){
    createEvent(input: {
      name: $name,
      dogId: $dogId,
      completed: false,
      eventDatetime: $eventDatetime,  
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

export const AddEvent = ({dogs}) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [dogId, setDogId] = useState(0)
  const [error, setError] = useState('');
  const [addNewEvent,] = useMutation(ADD_NEW_EVENT)

  // {
  //   refetchQueries: []
  // })

  const submitEvent = event => {
    event.preventDefault();
    setComplete(true);
    if(eventName && eventDate) {
    addNewEvent({
      variables: {
        dogId: Number(dogId),
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
        <label>Select dog:</label>
        <select onChange={(event)=> setDogId(event.target.value)}>
          {dogs.map(dog => (
            <option 
              key={dog.id} 
              value={dog.id}
            >
              {dog.name}
          </option>
          ))}
        </select>
        <label>Set event date:</label>
        <input
          type='date'
          placeholder='EventDateTime'
          value= {eventDate}
          onChange={(event)=> setEventDate(event.target.value)}
          required
        />
        <button onClick={event=> submitEvent(event)}>Submit</button>
        <p>{error}</p>
      </form> 
    </>
  )
}