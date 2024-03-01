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
  // const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  return (
    <>
      <BrowserRouter>
        <>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Edit_profile" element={<Edit_profile />} />
            <Route path="/Post" element={<Post />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
}
export default App;
