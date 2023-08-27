import React from "react";
import './App.scss';
import Header from './component/Header.js';
import HomeBanner from "./component/HomeBanner";
import Login from "./component/Login";
import Banner from "./component/Banner";
import List from "./component/List";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./component/Footer";
import Features from "./component/Features";
import Faq from "./component/Faq";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <HomeBanner/>
              <Features/>
              <Faq/>
              <Footer/>
            </React.Fragment>
          }/>
          <Route path="/login" element={
            <React.Fragment>
              <Header/>
              <Login/>
              <Footer/>
            </React.Fragment>
          }/>
          <Route path="/register" element={
            <React.Fragment>
              <Header/>
              <Login/>
              <Footer/>
            </React.Fragment>
          }/>
          <Route path="/dashboard" element={
            <React.Fragment>
              <Header/>
              <Banner/>
              <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
              <Footer/>
            </React.Fragment>
          }/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;