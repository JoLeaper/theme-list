import React, { useReducer } from 'react'
import CharacterList from '../components/CharacterList/CharacterList'
import reducer, { initialState } from '../reducers/appReducer'
import { useDispatch, usePage } from '../hooks/appContext';


function MainContainer() {
  const dispatch = useDispatch();
  const page = usePage();
  const increment = () => dispatch({ type: 'NEXT_PAGE' })
  const decrement = () => dispatch({ type: 'PREV_PAGE'})

  return (
    <>
      <CharacterList />      
      <button disabled={page === 1} onClick={decrement}>Prev</button>
      {page}
      <button onClick={increment}>Next</button>
    </>
  )
}

export default MainContainer

