import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "utils/urls";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const options = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username: username, password: password })
	}

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetch(`${BASE_URL}/signin`, options)
      .then((response) => {
        if(!response.ok) {
          setErrorMessage(true)
          throw new Error("Username and password do not match")
        } else {
          return response.json()
        }
      })
      .then((data) => {  
        localStorage.setItem("token", data.accessToken)
        navigate("/welcome")
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h2>Welcome back</h2>
      <form onSubmit={handleOnSubmit}>
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
      {errorMessage && <h3>Username and password do not match</h3>}
    </>
  )
}

export default SignIn;