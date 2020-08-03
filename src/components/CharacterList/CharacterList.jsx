import React from 'react'
import PropTypes from 'prop-types'
import Character from '../Character/Character'

function CharacterList({ characterList }) {
  const CharacterListElements = characterList.map(character => <Character character={character} />);

  return (
    <ul>
      {<CharacterListElements />}
    </ul>
  )
}

CharacterList.propTypes = {
  characterList: PropTypes.array
}

export default CharacterList

