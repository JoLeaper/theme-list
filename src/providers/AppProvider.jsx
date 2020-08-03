import React, { useReducer } from 'react';
import { appContext } from '../hooks/appContext';
import reducer, {initialState} from '../reducers/appReducer';
import { useEffect } from 'react';
import { getCharacters } from '../services/getCharacters'

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCharacters()
      .then(characters => dispatch({ type: 'SET_CHARACTERS', payload: characters }))
  }, [page])

  return (
    <AppProvider.Provider value={{ state, dispatch }}>
      {children}
    </AppProvider.Provider>
  )
}