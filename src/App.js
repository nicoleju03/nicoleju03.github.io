import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MyMap from './components/Map/Interactive';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2022.grad-issue"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return data && (
    <div className="App">
      <Header/>
        <p>Hello Daily Bruin!</p>
        <h1>React Leaflet Map</h1>
      <MyMap />
      <Footer/>
    </div>
  );
}

export default App;
