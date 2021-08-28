import './Create.css';
import React, { useState, useEffect } from 'react';

const Create = () => {
  const[state, setState] = useState({
    Name: '',
    Age: '',
    Breed: ''
  })

  handleChange = event => {
    setName(event)
  }
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