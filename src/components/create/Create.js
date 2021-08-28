import './Create.css';
import React, { useState, useEffect } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
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
       <input
        type='number'
        placeholder='Age'
        name = 'age'
        value= {age}
      />
      <input
        type='text'
        placeholder='Breed'
        name = 'breed'
        value= {breed}
      />
      <button>Create</button>
    </form>
    
  )
}

export default Create