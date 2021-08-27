import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from '../Header/Header';
import { Dashboard } from '../Dashboard/Dashboard'
import { Error } from '../Error/Error'
import { fetchData } from '../../utils/fetchCalls';

export const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [errorCode, setErrorCode] = useState(0);
  
  const fetchAndCleanData = async () => {
    try {
      let fetchedData = await fetchData('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      setFetchedData(fetchedData)
    } catch (error) {
      setErrorCode(Number(error.message))
    }
  }

  useEffect(() => {
    fetchAndCleanData()
  }, [])

  const clearSelected = () => {
    setErrorCode(0)
  }

  return (
    <>
      <Header />
      <main>
        {errorCode !== 0 &&
          <Error errorCode={errorCode} clearSelected={clearSelected} />
        }
        {!errorCode && (
          <Switch>
            <Route exact path='/' render={() =>
              <Dashboard fetchedData={fetchedData} /> 
            }/>

            <Route exact path='/404' render={() =>
              <Error errorCode={404} clearSelected={clearSelected} />
            }/>
            
            <Redirect to='/404' />
          </Switch>
        )}
      </main>
    </>
  );
}