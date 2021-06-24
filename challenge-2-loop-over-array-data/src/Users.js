import React from 'react'
import User from "./User"

const Users = ({users}) => {
  return (
    <>
        {users.length > 0 ? (users.map((user,index) => (
            <User
              key={index+1}
              user={user}
            />
          ))) : <h1>No users found</h1>}
    </>
  )
}

export default Users
