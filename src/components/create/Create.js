import PropTypes from 'prop-types';
import './Create.css';
import React, { useState, useEffect } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_NEW_DOG } from '../../utils/graph_mutations';
import { QUERY_EVERYTHING } from '../../utils/graph_queries';
import { fetchBreeds } from '../../utils/apiCalls';
import Select from 'react-select'

export const Create = ({ userID }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breedType, setBreed] = useState('');
  const [formError, setFormError] = useState('')
  const [breeds, setBreeds] = useState([]);
  const [addDog, { loading, error }] = useMutation(ADD_NEW_DOG, {
    refetchQueries: [QUERY_EVERYTHING]
  })

  useEffect(() => {
    fetchBreeds()
      .then(data => setBreeds(data))
  }, [])

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

  const options = breeds.map(breed => ({label: breed.name, value: breed.name}))
  options.push({label:'Mixed', value:'Mixed'})

  return(
    <form className='add-dog'>
      <h2 className='train-dog-title text'>Train your dog!</h2>
      <input
        type='text'
        placeholder='Name'
        name = 'name'
        value= {name}
        className='name-input'
        onChange={(event)=> setName(event.target.value)}
        required
      />
      <input
        type='number'
        placeholder='Age'
        name = 'age'
        min='0'
        value= {age}
        className='age-input'
        onChange={(event)=> setAge(event.target.value)}
        required
      />
      <label className='select-label text'>Select Breed:</label>
      <Select
        className='select'
        options = {options}
        onChange={(event) => setBreed(event.value)}
      />
      <button className='create-btn' onClick={event => submitDog(event)}>Create</button>
      <p>{formError}</p>
    </form>  
  )
}

Error.propTypes = {
  userID: PropTypes.number.isRequired
};