import React from 'react'
import './styles.css'

const User = ({user}) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.location}</p>
      <p>{user.car}</p>
    </div>
  )
}

export default User
