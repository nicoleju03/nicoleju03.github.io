import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  position: relative;
  margin: 2em auto 2% auto;
  width: 70%;
  height: fit-content;
  block-size: fit-content;
  border: 1px dotted gray;
  background: #A3C1AD;
  box-sizing: border-box;

  ${mediaQueries.mobile} {
    width: 80%;
  }
`;

const Text = styled.div`
  padding: 1.5em 3em;
`;

const Content = styled.div`
  margin: auto;
  font-weight: 550;
  font-size: 18px;
  line-height: 27px;
  text-align: justify;
  color: #ffffff;
  font-family: "Roboto Mono", sans-serif;
  ${mediaQueries.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const Title = styled.div`
  margin: auto;
  font-weight: 500;
  font-size: 30px;
  line-height: 27px;
  text-align: justify;
  color: #013b5a;
  font-family: "Bacasime Antique", sans-serif;
  ${mediaQueries.mobile} {
    font-size: 20px;
    line-height: 21px;
  }
`

export default function EditorLetter(props) {
  return (
    <div>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            May 2023 - Present
            <br></br><br></br>
            <Title>Undergraduate Researcher, Medication Reconciliation Research Group</Title>
            <ul type='circle'>
              <li>I use Python and natural language processing to help develop an algorithm that identifies discrepancies in patient medication lists.
                We parse prescriptions based on defined lexer and parser rules, then compare elements (dosage, ingredients, etc).</li>
            </ul>
          </Content>
        </Text>
      </Container>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            May 2023 - Present
            <br></br><br></br>
            <Title>External Sites Director, UCLA Daily Bruin</Title>
            <ul type='circle'>
              <li>I lead a team to construct 10-15 web pages a year for UCLA’s online newspaper, deploying pages on AWS.
                We implement Figma designs by creating styled React components and pulling article data/images from a Docker API. </li>
            </ul>
          </Content>
        </Text>
      </Container>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            Oct 2022 - Present
            <br></br><br></br>
            <Title>SWE Intern, Nasa Jet Propulsion Laboratory</Title>
            <ul type='circle'>
              <li>I work with a team to develop and maintain internal research sites while providing supporting documentation. 
              I design and construct research proposal forms that write to a backend API, and use Django to develop the Portal’s administrative interface.
              </li>
            </ul>
          </Content>
        </Text>
      </Container>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            June 2020 - July 2020
            <br></br><br></br>
            <Title>Social Media Marketing Intern, InMyShow USA</Title>
            <ul type='circle'>
              <li>I pioneered the company's first professional TikTok profile and implemented 
                marketing strategies to reach consumers and direct them to the company website. I grew the 
                company's social media presence, accumulating over 4500 followers and 350K views.
              </li>
            </ul>
          </Content>
        </Text>
      </Container>
    </div>
    
  );
}
