import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp" 
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Projects"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sigin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/project" element={<Project />}/>




      </Routes>
    </BrowserRouter>
  )
}
