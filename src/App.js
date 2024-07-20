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

    ${mediaQueries.mobile} {
      background-image: url(${mobileBackgroud});
    }

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
  display:inline-block;  
  object-fit: scale-down;
  padding-top: 7%;
  padding-bottom:5%;
`;

const Intro = styled.div`
  height: 30%;
  width: 35%;
  float: left;
  padding-top: 10%;
  padding-left: 10%;
  margin: auto;
  font-family: Roboto Mono, sans-serif;
  font-size: 18;
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
              Hello, I am an incoming 4th year computer science student at UCLA interested in backend software development! I have experience in C++, Java, Python, React/JavaScript, and Ruby/Rails. 
              My projects range from a mental health mobile application to a software tool that identifies discrepancies in medication lists. I recently completed a year-long software engineering 
              internship at JPL, where I helped develop and maintain JPL's internal research site. This summer, I am so excited to be interning at Gusto on the Embedded Payroll team, developing API 
              endpoints for partners to incorporate Gusto functionality into their own applications!
              <br></br><br></br>I love creating and exploring, and I am looking forward to building upon my skills through further industry and project experience.


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
