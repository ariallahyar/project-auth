import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL = "https://savari-auth.herokuapp.com/signup";
	const options = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username: username, email: email, password: password })
	}

	const handleOnSubmit = (event) => {
		event.preventDefault();
		fetch(URL, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
			.catch((error) => console.log(error));
		// navigate to login
	};

  return (
		<>
			<h2>Create an account</h2>
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
				<label htmlFor="email">Email</label>
				<input 
					type="text"
					id="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					placeholder="test@gmail.com" 
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
				<button type="submit">Sign up</button>
			</form>
		</>
  )
};

export default SignUp;