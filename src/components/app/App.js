import React, { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from '../header/Header';
import { Dashboard } from '../dashboard/Dashboard'
import { Error } from '../error/Error'
import { AddEvent } from '../addEvent/AddEvent'
import { Calendar } from '../calendar/Calendar'
import { Event } from '../event/Event'
import { Dog } from '../dog/Dog'
import Create from '../create/Create';

export const App = () => {
  const [userID, setUserID] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [events, setEvents] = useState([]);

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
        id
        dogId
        name
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

  const sortEvents = (listOfEvents) => {
    let spreadArray = [...listOfEvents]
    return spreadArray.sort((a, b) => {
      return new Date(a.eventDatetime) - new Date(b.eventDatetime)
    })
  }

  if (data.dogs.length && !dogs.length) {
    setDogs(data.dogs)
  }

  if (data.events.length && !events.length) {
    setEvents(sortEvents(data.events))
  }

  if (data) {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' render={() =>
              <Dashboard userName={data.user.name} dogs={dogs} events={events} /> 
            }/>

            <Route path='/create'>
              <Create userID={userID} />
            </Route>

            <Route path='/add_event'>
              <AddEvent dogs={dogs}/>
            </Route>

            <Route path='/calendar'>
              <Calendar events={events} />
            </Route>

            <Route path='/dog/:id' render={({ match }) => {
              let matchingDog = dogs.find(dog => dog.id === match.params.id);
              if (!matchingDog) {
                return (<div>Couldn't find this dog.</div>);  
              }
              return <Dog matchingDog={matchingDog} removeDog={removeDog} />
            }} />

            <Route path='/event/:id' render={({ match }) => {
              let matchingEvent = events.find(event => event.id === match.params.id);
              if (!matchingEvent) {
                return (<div>Couldn't find this event.</div>);  
              }
              return <Event matchingEvent={matchingEvent} />
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