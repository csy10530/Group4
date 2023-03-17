import React from 'react';
import './App.css';
import {Signup} from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import UploadProduct from "./pages/UploadProduct/UploadProduct";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Profile from "./pages/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/upload" element={<UploadProduct/>}/>
                <Route path="/product" element={<ProductDetail/>}/>
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </div>
    );
}

export default App;
