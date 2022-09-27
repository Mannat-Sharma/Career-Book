import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import Explore from './components/Explore';
import SearchBar from './components/SearchBar';
import { Navbar } from './components/Navbar';
import Faqs from './components/Faqs';
import Home from './components/Home';
import Ourbot from './components/Ourbot';
import Trending from './components/Trending';
import Courses from './components/Courses';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <SearchBar/>
        <div className='main'>
          <Navbar/>
          <div className='main-section'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/explore" element={<Explore/>}></Route>
              <Route path="/courses" element={<Courses/>}></Route>
              <Route path="/faqs" element={<Faqs/>}></Route>
              <Route path="/skills" element={<Skills/>}></Route>
            </Routes>
          </BrowserRouter>
          </div>
        </div>
        <Ourbot/>
    </div>
  );
}
export default App;
