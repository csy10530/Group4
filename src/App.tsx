import React from 'react';
import './App.css';
import {Signup} from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </div>
    );
}

export default App;
