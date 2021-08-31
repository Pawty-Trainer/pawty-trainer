import React, { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from '../header/Header';
import { Dashboard } from '../dashboard/Dashboard'
import { Error } from '../error/Error'
import { AddEvent } from '../addEvent/AddEvent'
import { Calendar } from '../calendar/Calendar'
import { Dog } from '../dog/Dog'
import Create from '../create/Create';

export const App = () => {
  const [userID, setUserID] = useState(0);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    setUserID(1)
  }, [])

  const { loading, error, data } = useQuery(gql`
    query {
      user(id: ${userID}) {
        id
        name
      } dogs {
        id
        name
        breed
        age
      } events {
        dogId
        name
        completed
        eventDatetime
      }
    }
  `);

  const removeDog = (dogObject) => {
    let currentDogs = [...dogs]
    let ind = currentDogs.indexOf(dogObject)
    currentDogs.splice(ind, 1)
    setDogs([...currentDogs])
  }

  if (loading) {
    return (
      <>
        <Header />
        <p>Loading...</p>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <Error errorCode={error} />
      </>
    )
  }

  if (data.dogs.length && !dogs.length) {
    setDogs(data.dogs)
  }

  if (data) {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' render={() =>
              <Dashboard data={data} dogs={dogs} /> 
            }/>

            <Route path='/create'>
              <Create userID={userID} />
            </Route>

            <Route path='/event'>
              <AddEvent />
            </Route>

            <Route path='/calendar'>
              <Calendar />
            </Route>

            <Route path='/dog/:id' render={({ match }) => {
              let matchingDog = data.dogs.find(dog => dog.id === match.params.id);
              if (!matchingDog) {
                return (<div>Couldn't find this dog.</div>);  
              }
              return <Dog matchingDog={matchingDog} removeDog={removeDog} />
            }} />

            <Route exact path='/404' render={() =>
              <Error errorCode={404} />
            }/>
            
            <Redirect to='/404' />
          </Switch>
        </main>
      </>
    )
  }
}