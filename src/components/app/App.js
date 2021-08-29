import React, { useState, useEffect } from 'react';
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

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' render={() =>
            <Dashboard userID={userID}/> 
          }/>

          <Route path='/create'>
            <Create addDog={addDog}/>
          </Route>

          <Route exact path='/404' render={() =>
            <Error errorCode={404} />
          }/>
          
          <Redirect to='/404' />
        </Switch>
      </main>
    </>
  );
}