import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
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
import { QUERY_EVERYTHING } from '../../utils/graph_queries';

export const App = () => {
  const { loading, error, data } = useQuery(QUERY_EVERYTHING)
  const [user, setUser] = useState({});
  const [dogs, setDogs] = useState([]);
  const [events, setEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState(0);

  useEffect(() => {
    if (!loading && data) {
      setUser(data.user)
      setDogs(data.dogs)
      let sortedEvents = sortEvents(data.events)
      let filteredEvents = filterEvents(sortedEvents)
      setEvents(filteredEvents.outstanding)
      setCompletedEvents(filteredEvents.completed.length)
    }
  }, [data, loading])

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

  const filterEvents = (events) => {
    let today = new Date()
    let spreadArray = [...events]
    return spreadArray.reduce((newObj, currentEvent) => {
      if (currentEvent.completed) {
        newObj.completed = [...newObj.completed, currentEvent]
      }
      if (!currentEvent.completed &&
        new Date(currentEvent.eventDatetime) >= today) {
        newObj.outstanding = [...newObj.outstanding, currentEvent]
      }
      return newObj
    }, { completed: [], outstanding: [] })
  }

  if (data) {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' render={() =>
              <Dashboard
                userName={user.name}
                dogs={dogs}
                events={events}
                completedEvents={completedEvents}
              /> 
            }/>

            <Route path='/create'>
              <Create userID={1} />
            </Route>

            <Route path='/add_event'>
              <AddEvent dogs={dogs} />
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