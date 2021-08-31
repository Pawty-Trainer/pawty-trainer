import './AddEvent.css';
import { useState } from 'react';

export const AddEvent = () => {
  const [eventName, setEventName] = useState('')
  return (
    <>
      <form>
        <h1>Add New Event</h1>
        <input
          type='text'
          placeholder='Event Name'
          // value=
          required
        />
        <input
          type='date'
          placeholder='EventDateTime'
          // value=
          required
        />
      </form>
    </>
  )
}