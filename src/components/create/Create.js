import './Create.css';
import React, { useState } from 'react';

const Create = ({addDog}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('')

  const submitDog = event => {
    event.preventDefault();
    const newDog = {
      id: Date.now(),
      Name: name,
      Age: age,
      Breed: breed
    }
    addDog(newDog)
    clearInputs()
  }

  const clearInputs = () => {
    setName('');
    setAge('');
    setBreed('');
  }
  return(
    <form>
      <h1 className='train-dog-title'>Train your dog!</h1>
      <input
        type='text'
        placeholder='Name'
        name = 'name'
        value= {name}
        onChange={(event)=> setName(event.target.value)}
      />
       <input
        type='number'
        placeholder='Age'
        name = 'age'
        value= {age}
        onChange={(event)=> setAge(event.target.value)}
      />
      <input
        type='text'
        placeholder='Breed'
        name = 'breed'
        value= {breed}
        onChange={(event)=> setBreed(event.target.value)}
      />
      <button onClick={event => submitDog(event)}>Create</button>
    </form>
    
  )
}

export default Create