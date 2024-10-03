import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import SectionHeader from "./components/SectionHeader";
import { HashRouter } from 'react-router-dom';
import NavHeader from "./components/NavHeader";
import ArticleGrid from "./components/ArticleGrid";
import SkillsGrid from "./components/SkillsGrid";
import Interests from "./components/Interests";
import Experience from "./components/Experience";
import Education from "./components/Education";

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
    background-color: #E1EBEE;
    background-size: cover;
    height: fit-content;

  `;

  const Name = styled.div`
    background-color: #E1EBEE;
    background-size: cover;
    height: 20px;
    text-align: left;
    font-size: 50px;
    padding-top: 32px;
    margin-left: 7%;
    font-family: Bacasime Antique;
    color: #013b5a;
  `;
  const Image = styled.img`
  height: 30%;
  width: 30%;
  display: inline-block;  
  object-fit: scale-down;
  padding-top: 12%;
  padding-bottom:5%;

  ${mediaQueries.mobile} {
    display: block;
    margin: auto;
    height: 40%;
    width: 40%;
    
  }
  
`;

const Intro = styled.div`
  height: 30%;
  width: 35%;
  float: left;
  padding-top: 10%;
  padding-left: 10%;
  margin: auto;
  font-family: Roboto Mono, sans-serif;
  font-size: 18px;

  ${mediaQueries.mobile} {
    margin: auto;
    font-size: 12px;
    float: none;
    padding-left: 0;
    width: 70%;
  }
`;

  return data && (
    <div className="App" >
      <HashRouter>
        <Container>
          <NavHeader />
          <Name>Nicole Ju</Name>
          <div>
            <Image src="../me.png" />
            <Intro>
              <b>Phone:</b> (925) 520-5568 <br></br><br></br>
              <b>Email:</b> nicoleju03@gmail.com <br></br><br></br>
              <b>LinkedIn:</b> <a href = "https://www.linkedin.com/in/nicoleju03/" target="_blank" style={{color:"#87A96B"}} rel="noreferrer">https://www.linkedin.com/in/nicoleju03/</a> <br></br><br></br>
              <b>GitHub:</b> <a href = "https://github.com/nicoleju03" target="_blank" style={{color:"#87A96B"}} rel="noreferrer">https://github.com/nicoleju03</a> <br></br><br></br>
              Hello, I am 4th year computer science student at UCLA interested in software engineering. I have project and industry experience in C++, C, Python, React/JavaScript, and Ruby/Rails. 
              My projects range from a full-stack mental health mobile application to a software tool that identifies discrepancies in medication lists. I recently completed a software engineering 
              internship at Gusto and had an amazing experience! 
              <br></br><br></br>Moving forward, I'm excited to pursue full-time software engineering careers where I can help develop client-focused products and make a meaningful impact!


            </Intro>
          </div>
          <div id="EXPERIENCE">
            <SectionHeader text="Experience"></SectionHeader>
            <Experience></Experience>
          </div>
          <div id="PROJECTS">
            <SectionHeader text="Projects"></SectionHeader>
            <ArticleGrid articles={data.news}></ArticleGrid>
          </div>
          <div id="EDUCATION">
            <SectionHeader text="Education"></SectionHeader>
            <Education></Education>
          </div>
          <div id="SKILLS">
            <SectionHeader text="Skills"></SectionHeader>
            <SkillsGrid articles={data.sports}></SkillsGrid>
          </div>
          <div id="INTERESTS">
            <SectionHeader text="Interests"></SectionHeader>
            <Interests articles={data.sports}></Interests>
          </div>
        </Container>
      </HashRouter>
    </div>
  );
  
}

export default App;
