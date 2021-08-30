import './Create.css';
import React, { useState } from 'react';
import { useMutation, gql } from "@apollo/client";

const ADD_NEW_DOG = gql`
  mutation ($name: String!, $userId: Int!, $breed: String!, $age: Int!) {
    createDog(input: {
        name: $name,
        userId: $userId,
        breed: $breed,
        age: $age
  }) {
      dog {
        id
        userId
        name
        breed
        age
      }
      errors
    }
  }
`;

const Create = ({userID}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  //Will eventually use api that backend creates to turn this into a drop down 
  const [error, setError] = useState('')
  const [addDog] = useMutation(ADD_NEW_DOG)

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
      clearError()
      clearInputs()

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