import './Create.css';
import React, { useState } from 'react';

const Create = ({addDog}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [error, setError] = useState('')

  const submitDog = event => {
    event.preventDefault();
    clearInputs()
    const newDog = {
      id: Date.now(),
      Name: name,
      Age: age,
      Breed: breed
    }
    if(name && age && breed) {
      addDog(newDog);
      clearError()
    } else {
      setError('Sorry, you must input all fields before creating a dog!')
    } 
  }

  const clearInputs = () => {
    setName('');
    setAge('');
    setBreed('');
  }

  const clearError = () => {
    setError('')
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
        required
      />
       <input
        type='number'
        placeholder='Age'
        name = 'age'
        value= {age}
        onChange={(event)=> setAge(event.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Breed'
        name = 'breed'
        value= {breed}
        onChange={(event)=> setBreed(event.target.value)}
        required
      />
      <button onClick={event => submitDog(event)}>Create</button>
      <p>{error}</p>
    </form>
    
  )
}

export default Create