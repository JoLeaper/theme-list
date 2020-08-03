import React from 'react'
import PropTypes from 'prop-types'

function Character({id, name, image }) {
  return (
    <li key={id}>
      <img src={image} />
      <h1>{name}</h1>
    </li>
  )
}

Character.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
}

export default Character

