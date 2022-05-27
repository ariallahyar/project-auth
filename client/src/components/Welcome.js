import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "utils/urls";

const Welcome = () => {
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    navigate("/");
  }

  const options = {
    method: "GET",
    headers: { Token: token },
  };

  useEffect(() => {
    fetch(`${BASE_URL}/session`, options)
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <h2>{message}</h2>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/signin");
        }}
      >
        Sign out
      </button>
    </>
  );
};

export default Welcome;
