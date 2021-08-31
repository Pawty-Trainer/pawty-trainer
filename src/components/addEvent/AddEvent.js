import './AddEvent.css';
import { useState } from 'react';

export const AddEvent = () => {

  return (
    <>
      <form>
        <h1>Add New Event</h1>
        <input
          type='text'
          placeholder='Event'
          // value=
          required
        />
        <input
          type='text'
          placeholder='EventDateTime'
          // value=
          required
        />
      </form>
    </>
  )
}