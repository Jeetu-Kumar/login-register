import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Page/Dashboard";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
