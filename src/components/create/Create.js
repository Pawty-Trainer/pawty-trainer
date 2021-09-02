import './Create.css';
import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_NEW_DOG } from '../../utils/graph_mutations';
import { QUERY_EVERYTHING } from '../../utils/graph_queries';

const Create = ({ userID, breeds }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  //Will eventually use api that backend creates to turn this into a drop down 
  const [formError, setFormError] = useState('')
  const [addDog, { loading, error }] = useMutation(ADD_NEW_DOG, {
    refetchQueries: [QUERY_EVERYTHING]
  })

  const submitDog = event => {
    event.preventDefault();
    if(name && age && breed) {
      addDog({
        variables: {
          name: name,
          userId: userID,
          breed: breed,
          age: Number(age)
        }
      });
      setFormError('')
      clearInputs()

    } else {
      setFormError('Sorry, you must input all fields before creating a dog!')
    } 
  }

  const clearInputs = () => {
    setName('');
    setAge('');
    setBreed('');
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

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
      {/* <input
        type='text'
        placeholder='Breed'
        name = 'breed'
        value= {breed}
        onChange={(event)=> setBreed(event.target.value)}
        required
      /> */}
      {/* <select>
        {Object.entries(breeds)(breed => (
          <option
            key={breed}
            value={breed}
          >
            {breed}
          </option>
        ))}
      </select> */}
      <button onClick={event => submitDog(event)}>Create</button>
      <p>{formError}</p>
    </form>
    
  )
}

export default Create