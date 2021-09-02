import './Create.css';
import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_NEW_DOG } from '../../utils/graph_mutations';
import { QUERY_EVERYTHING } from '../../utils/graph_queries';
import Select from 'react-select'
import { fetchBreeds } from '../../utils/apiCalls';

const Create = ({ userID, breeds }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breedType, setBreed] = useState('');
  const [formError, setFormError] = useState('')
  const [addDog, { loading, error }] = useMutation(ADD_NEW_DOG, {
    refetchQueries: [QUERY_EVERYTHING]
  })

  const submitDog = event => {
    event.preventDefault();
    if(name && age && breedType) {
      addDog({
        variables: {
          name: name,
          userId: userID,
          breed: breedType,
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

  const options = breeds.map(breed=> ({label: breed.name, value: breed.name}))

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
      <label>Select Breed:</label>
      <Select className='select'
        // onChange={(breed)=> setBreed(breed.target.value)}
        options = {options}
        onChange={(event) => setBreed(event.value)}
      />
        {/* <option 
          placeholder='Dog Breed' 
          value='Dog Breed'
          >Dog Breed
        </option>
        <option 
          value='Mixed'
          >Mixed Breed
        </option>
        {breeds.map(breed => (
          <option
            label={breed.id}
            value={breed.name}
          >
            {breed.name}
          </option>
        ))} */}
        
      {/* </Select> */}
      <button onClick={event => submitDog(event)}>Create</button>
      <p>{formError}</p>
    </form>
    
  )
}

export default Create