import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "components/SignUp";
import SignIn from "components/SignIn";
import Welcome from "components/Welcome";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  )
};
