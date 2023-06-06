import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from "./components/Landing";
import background from './images/background.svg'
import SectionHeader from "./components/SectionHeader";
import ArticleGrid from './components/ArticleGrid';

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
          <SectionHeader text="LETTER FROM THE EDITORS"></SectionHeader>
          <SectionHeader text="INTERACTIVE"></SectionHeader>

          <SectionHeader text=" NEWS"></SectionHeader>
          <ArticleGrid articles={data.news}></ArticleGrid>

          <SectionHeader text="SPORTS"></SectionHeader>
          <ArticleGrid articles={data.sports}></ArticleGrid>

          <SectionHeader text="ARTS"></SectionHeader>
          <ArticleGrid articles={data.arts}></ArticleGrid>

          <SectionHeader text="OPINION"></SectionHeader>
          <ArticleGrid articles={data.opinion}></ArticleGrid>

          <SectionHeader text="THE QUAD"></SectionHeader>
          <ArticleGrid articles={data.quad}></ArticleGrid>

          <SectionHeader text="MULTIMEDIA"></SectionHeader>
          <ArticleGrid articles={data.multimedia}></ArticleGrid>

          <SectionHeader text="PRIME"></SectionHeader>
          <ArticleGrid articles={data.prime}></ArticleGrid>

          <SectionHeader text="-30- COLUMNS"></SectionHeader>
          <ArticleGrid articles={data.thirty}></ArticleGrid>

          <SectionHeader text="ABOUT"></SectionHeader>
        </Container>
      <Footer/>
    </div>
  );
}

export default App;
