import './AddEvent.css';
import { useState } from 'react';

export const AddEvent = ({addEvent}) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [error, setError] = useState('')

  const submitEvent = event => {
    event.preventDefault();
    const newEvent = {
      id:Date.now(),
      eventName: eventName,
      EventDate: eventDate
    }
    if(eventName && eventDate) {
     addEvent(newEvent)
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