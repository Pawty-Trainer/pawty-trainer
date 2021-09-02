import './AddEvent.css';
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_NEW_EVENT } from '../../utils/graph_mutations';
import { QUERY_EVERYTHING } from '../../utils/graph_queries';

export const AddEvent = ({ dogs }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [dogId, setDogId] = useState(0)
  const [formError, setFormError] = useState('');
  const [addNewEvent, { loading, error }] = useMutation(ADD_NEW_EVENT, {
    refetchQueries: [QUERY_EVERYTHING]
  })

  const submitEvent = (event) => {
    event.preventDefault();
    if(eventName && eventDate && dogId) {
    addNewEvent({
      variables: {
        dogId: Number(dogId),
        name: eventName,
        eventDatetime: eventDate
      }
    })
    setFormError('')
    clearInputs()
    } else {
      setFormError('Sorry, you must input all fields before creating an event!')
    }
  }
  const clearInputs = () => {
    setEventName('');
    setEventDate('');
    setDogId(0);
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

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
          <option 
            placeholder='Dog Name'
            key={dogId} 
            value={dogId}
          >Dog Name
          </option>
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
        <p>{formError}</p>
      </form> 
    </>
  )
}