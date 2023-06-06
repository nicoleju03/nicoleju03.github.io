import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import background from './images/background.svg'
import SectionHeader from "./components/SectionHeader";

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.grad.issue.2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    height: fit-content;
  `

  return data && (
    <div className="App">
      <Header/>
      <Container>
      <Landing image={data.landing_image} credits={data.landing_credits}/>   
      <SectionHeader text="LETTER FROM THE EDITOR"></SectionHeader>
      <SectionHeader text="INTERACTIVE"></SectionHeader>
      <SectionHeader text=" NEWS"></SectionHeader>
      <SectionHeader text="SPORTS"></SectionHeader>
      <SectionHeader text="ARTS"></SectionHeader>
      <SectionHeader text="OPINION"></SectionHeader>
      <SectionHeader text="THE QUAD"></SectionHeader>
      <SectionHeader text="MULTIMEDIA"></SectionHeader>
      <SectionHeader text="PRIME"></SectionHeader>
      <SectionHeader text="-30- COLUMNS"></SectionHeader>
      <SectionHeader text="ABOUT"></SectionHeader>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
