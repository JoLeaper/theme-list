import React from 'react'
import PropTypes from 'prop-types'
import Character from '../Character/Character'
import { useCharacters } from '../../hooks/appContext' 

function CharacterList() {
  const characterList = useCharacters();
  
  return (
    <ul>
      {characterList.map(character => <Character character={character} />)}
    </ul>
  )
}

CharacterList.propTypes = {
  characterList: PropTypes.array
}

export default CharacterList

