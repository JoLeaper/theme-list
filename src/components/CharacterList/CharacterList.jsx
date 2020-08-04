import React from 'react'
import PropTypes from 'prop-types'
import Character from '../Character/Character'
import { useCharacters, useTheme } from '../../hooks/appContext'
import styles from './CharacterList.css';

function CharacterList() {
  const characterList = useCharacters();
  const theme = useTheme();
  
  return (
    <ul className={styles[`CharacterList-${theme}`]}>
      {characterList.map(character => <Character character={character} />)}
    </ul>
  )
}

CharacterList.propTypes = {
  characterList: PropTypes.array
}

export default CharacterList

