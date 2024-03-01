import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Projects from "./Components/Projects";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Edit_profile from "./Components/Edit_profile";
import Post from "./Components/Post";
import Sidebar from "./Components/Sidebar";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Sidebar></Sidebar>
    </>
  );
};

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));
  return (
    <>
      <BrowserRouter>
        {auth && role_id == 1 ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </>
        ) : auth && role_id == 2 ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </>
        ) : auth && role_id == 3 ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}
export default App;
