import './Create.css';
import React, { useState, useEffect } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState('')

  return(
    <form>
      <h1 className='train-dog-title'>Train your dog!</h1>
      <input
        type='text'
        placeholder='Name'
        name = 'name'
        value= {name}
      />
      
    </form>
    
  )
}

export default Create