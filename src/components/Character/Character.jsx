import React from 'react'
import PropTypes from 'prop-types'

function Character({ character: { _id, photoUrl, name}}) {
  return (
    <li key={_id}>
      <img src={photoUrl} />
      <h1>{name}</h1>
    </li>
  )
}

Character.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
}

export default Character

