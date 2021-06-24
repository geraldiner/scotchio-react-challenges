import React from "react";
import './styles.css'

export default function User({ user }) {
  const twitterLink = `https://twitter.com/${user.twitterUsername}`
  return <div className="user-deets">
  <img src={user.avatar} alt={user.name} />

  <h3>
    <a href={twitterLink}>{user.name}</a>
  </h3>

  <p>
    <strong>Location</strong> {user.location}
  </p>
  <p>
    <strong>Eats</strong> {user.foodType}
  </p>
  <p>
    <strong>Age</strong> {user.age}
  </p>
  <p>
    <strong>Likes</strong> {user.likes}
  </p>

  <p>
    <strong>Twitter</strong>{' '}
    <a href={twitterLink}>@{user.twitterUsername}</a>
  </p>
</div>;
}
