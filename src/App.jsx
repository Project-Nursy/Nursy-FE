import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./test/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./test/signUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signUp" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
