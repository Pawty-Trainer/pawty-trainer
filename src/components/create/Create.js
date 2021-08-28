import './Create.css';
import React, { useState, useEffect } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [breed, setBreed] = useState('')
  
  return(
    <h1>Train your dog!</h1>
  )
}

export default Create