import './Create.css';
import React, { useState, useEffect } from 'react';

const Create = () => {
  const[state, setState] = useState({
    Name: '',
    Age: '',
    Breed: ''
  })

  handleChange = (event) => {
    setState({ [event.target.name]: event.target.value})
  }
  return(
    <form>
      <h1 className='train-dog-title'>Train your dog!</h1>
      <input
        type='text'
        placeholder='Name'
        name = 'name'
        value= {state.name}
      />
       <input
        type='number'
        placeholder='Age'
        name = 'age'
        value= {state.age}
      />
      <input
        type='text'
        placeholder='Breed'
        name = 'breed'
        value= {state.breed}
      />
      <button>Create</button>
    </form>
    
  )
}

export default Create