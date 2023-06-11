import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import background from "./images/background.svg";
import MyMap from './components/Map/Interactive';
import SectionHeader from "./components/SectionHeader";
import { HashRouter } from 'react-router-dom';
import NavHeader from "./components/NavHeader";
import ArticleGrid from "./components/ArticleGrid";
import EditorLetter from "./components/EditorLetter";
import About from "./components/About";
import mobileBackgroud from "./images/mobilebackground.svg";
import { mediaQueries } from "./shared/config";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.grad.issue.2023"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    height: fit-content;

    ${mediaQueries.mobile} {
      background-image: url(${mobileBackgroud});
    }

  `;

  return data && (
    <div className="App">
      <HashRouter>
        <Header/>
        <Container>
          <NavHeader />
          <Landing image={data.landing_image} credits={data.landing_credits} />
          <div id="LETTER">
            <SectionHeader text="LETTER FROM THE EDITORS"></SectionHeader>
            <EditorLetter editor_letter={data.editor_letter}></EditorLetter>
          </div>
          <div id="A CLOSER LOOK">
            <SectionHeader text="A CLOSER LOOK"></SectionHeader>
            <MyMap />
          </div>
          <div id="NEWS">
            <SectionHeader text="NEWS"></SectionHeader>
            <ArticleGrid articles={data.news}></ArticleGrid>
          </div>
          <div id="SPORTS">
            <SectionHeader text="SPORTS"></SectionHeader>
            <ArticleGrid articles={data.sports}></ArticleGrid>
          </div>
          <div id="ARTS">
            <SectionHeader text="ARTS"></SectionHeader>
            <ArticleGrid articles={data.arts}></ArticleGrid>
          </div>
          <div id="OPINION">
            <SectionHeader text="OPINION"></SectionHeader>
            <ArticleGrid articles={data.opinion}></ArticleGrid>
          </div>
          <div id="THE QUAD">
            <SectionHeader text="THE QUAD"></SectionHeader>
            <ArticleGrid articles={data.quad}></ArticleGrid>
          </div>
          <div id="MULTIMEDIA">
            <SectionHeader text="MULTIMEDIA"></SectionHeader>
          <ArticleGrid articles={data.multimedia}></ArticleGrid>
          </div>
          <div id="PRIME">
            <SectionHeader text="PRIME"></SectionHeader>
            <ArticleGrid articles={data.prime}></ArticleGrid>
          </div>          
          <div id="-30-">
            <SectionHeader text="-30- COLUMNS"></SectionHeader>
            <ArticleGrid articles={data.thirty}></ArticleGrid>
          </div>
          <div id="ABOUT">
            <SectionHeader text="ABOUT"></SectionHeader>
            <About about={data.about}></About>
          </div>
          <Footer />
        </Container>
      </HashRouter>
    </div>
  );
}

export default App;
