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

export default function Experience(props) {
  return (
    <div>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            June 2024 - Sept 2024
            <br></br><br></br>
            <Title>Software Engineering Intern, Gusto Inc. </Title><br></br>
            As part of Gusto's Embedded Payroll team, I used Ruby on Rails to develop API endpoints 
            for partners to incorporate Gusto’s payroll functionality into their own applications. 
            In particular, I built support for contractor-only companies, immediately unblocking around 
            15,000 partner companies. I leveraged the MVC framework to edit models, views, and controllers. 
            For instance, I enabled contractor-only company creation through POST request parameters and 
            implemented a new PUT endpoint for company updates. I also worked on developing a new API for 
            contractor documents, including actions like accessing, signing, and downloading forms.
          </Content>
        </Text>
      </Container>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            May 2023 - Present
            <br></br><br></br>
            <Title>Undergraduate Researcher, Medication Reconciliation Research Group</Title><br></br>
            I use Python and natural language processing to identify discrepancies in medication lists and display 
            results to a Heroku application. My team utilizes ANTLR to parse prescriptions based on defined lexer/parser 
            rules and extract elements for comparison (dosage, ingredients, etc.). In one project, I flagged manually matched 
            medications by inspecting an HTTP response and rendering a POST request with altered entries. I have also worked 
            on visualizing our algorithm's performance and accuracy using Python's Streamlit library.
          </Content>
        </Text>
      </Container>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            May 2023 - June 2024
            <br></br><br></br>
            <Title>External Sites Director, UCLA Daily Bruin</Title><br></br>
            I led a team of 12 to construct 10-15 web pages a year for UCLA’s online newspaper, deploying pages to AWS. 
            We used JavaScript and CSS to implement Figma designs, creating styled React components that pulled from
            the backend database via an API. In addition to developing web pages, I attended budget, content, and design 
            meetings to manage Daily Bruin’s production workflow and pitch new project ideas.
          </Content>
        </Text>
      </Container>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            Oct 2022 - Sept 2023
            <br></br><br></br>
            <Title>SWE Intern, NASA Jet Propulsion Laboratory</Title>
            <br></br>
            I utilized Python and JavaScript to develop, test, and maintain JPL's Internally Managed Research 
            Portal and research sites. For instance, I created research proposal forms, with independent modals 
            and complex error validation, that updated the backend via an API. In other projects, I used Django 
            to manage the Portal's SQL database, constructing Models and implementing features for the admin interface.
            <br></br>
          </Content>
        </Text>
      </Container>
    </div>
    
  );
}
