import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Project from "./Components/Project";
import Add_project from "./Components/Add_project";
import Subadmin from "./Components/Subadmin";
import Contractor from "./Components/Contractor";
import Add_task from "./Components/Add_task";
import Add_subadmin from "./Components/Add_subadmin";
import Add_contractor from "./Components/Add_contractor";
import Task from "./Components/Task";
import CompletedTask from "./Components/CompletedTask";
import Add_taskdone from "./Components/Add_taskdone";

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
              <Route path="/Add_subadmin" element={<Add_subadmin />} />
              <Route path="/Add_subadmin/:id" element={<Add_subadmin />} />
              <Route path="/Contractor" element={<Contractor />} />
              <Route path="/Add_contractor" element={<Add_contractor />} />
              <Route path="/Add_contractor/:id" element={<Add_contractor />} />
              <Route path="/Task" element={<Task />} />
              <Route path="/Add_task" element={<Add_task />} />
              <Route path="/CompletedTask" element={<CompletedTask />} />
              <Route path="/Add_taskdone" element={<Add_taskdone />} />
              <Route path="/Add_taskdone/:id" element={<Add_taskdone />} />
              <Route path="/Add_task/:id" element={<Add_task />} />
            </Routes>
          </>
        ) : // Sub Admin
        auth && role_id == 2 ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Contractor" element={<Contractor />} />
              <Route path="/Add_contractor" element={<Add_contractor />} />
              <Route path="/Add_contractor/:id" element={<Add_contractor />} />
              <Route path="/Task" element={<Task />} />
              <Route path="/Add_task" element={<Add_task />} />
              <Route path="/Add_task/:id" element={<Add_task />} />
              <Route path="/CompletedTask" element={<CompletedTask />} />
              <Route path="/Add_taskdone" element={<Add_taskdone />} />
              <Route path="/Add_taskdone/:id" element={<Add_taskdone />} />
            </Routes>
          </>
        ) : auth && role_id == 3 ? ( // Contractor
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Task" element={<Task />} />
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
