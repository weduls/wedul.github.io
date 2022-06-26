import React from "react";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from './routes/about/About'
import Home from './routes/home/Home'
import Navigation from "./components/navigation/Navigation";
import Detail from "./routes/detail/Detail";

function App() {
    return (

        <Router>
            <Navigation/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/movie-detail" element={<Detail/>}/>
            </Routes>
        </Router>
    )
}

export default App;
