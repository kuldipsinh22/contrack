import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Project from "./Components/Project";
import Add_project from "./Components/Add_project";
import Subadmin from "./Components/Subadmin";

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
              <Route path="/Project" element={<Project />} />
              <Route path="/Add_project" element={<Add_project />} />
              <Route path="/Add_project/:id" element={<Add_project />} />
              <Route path="/Subadmin" element={<Subadmin />} />
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
