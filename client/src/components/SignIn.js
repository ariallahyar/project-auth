import React, { useState } from 'react'

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>Welcome back</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          id="username"
          value={username}
          onChange = {(event) => setUsername(event.target.value)}
          placeholder="testytester"
          required
        />
        <label htmlFor="password">Password</label>
        <input 
          type="text"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Sign in</button>
      </form>
    </>
  )
}

export default SignIn;