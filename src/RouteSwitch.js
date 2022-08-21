import React from 'react';
import App from './App';
import Shop from './Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';

const RouteSwitch = () =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/Shop" element={<Shop/>} />
            <Route path="/Signup" element={<Signup />}/>
            <Route path="/Signin" element={<Signin />}/>

        </Routes>
        </BrowserRouter>
    );
}
export default RouteSwitch;