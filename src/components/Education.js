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

export default function Education(props) {
  return (
    <div>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            Sept 2021 - June 2025
            <br></br><br></br>
            <Title>B.S. (in progress), UCLA Computer Science</Title><br></br>
              I am currently studying computer science at the University of California, Los Angeles: UCLA. 
                My cumulative and major GPA are 4.0/4.0. My completed coursework includes: Object-Oriented Programming, Data Structures and Algorithms, Algorithms and Complexity, Software Construction, Artificial Intelligence, Machine Learning, Data Science, Operating Systems, Computer Networks, Logic Design of Digital Systems, Computer Systems Architecture, Theory of Computing, and Embedded Development.
          </Content>
        </Text>
      </Container>
      <Container>
        <Text>
          <Content style={{ margin: "auto" }}>
            Aug 2017 - June 2021
            <br></br><br></br>
            <Title>Diploma, Amador Valley High School</Title><br></br>
              I attended Amador Valley High School and achieved a 4.5 weighted GPA (4.0 unweighted) and a 1570 / 1600 SAT score. 
                I took several useful courses, including AP Computer Science and AP Statistics. I excelled in my classes and received 
                AP Scholar with Distinction and National Merit Scholarship.
          </Content>
        </Text>
      </Container>
    </div>
  );
}
