import React, { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from '../header/Header';
import { Dashboard } from '../dashboard/Dashboard'
import { Error } from '../error/Error'
import Create from '../create/Create'; 

export const App = () => {
  const [userID, setUserID] = useState(0);
  const [myDogs, setMyDogs] = useState([]);
  
  const addDog = (newDog) => {
    if (!myDogs.includes(newDog)) {
      setMyDogs([newDog, ...myDogs]);
    }
  }

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

  if (data) {
    console.log(data)
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' render={() =>
              <Dashboard data={data}/> 
            }/>

            <Route path='/create'>
              <Create addDog={addDog} />
            </Route>

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