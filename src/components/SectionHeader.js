import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8em;
`;

const Text = styled.div`
  font-family: 'Secular One';
  font-size: 50px;
  font-weight: 400;
  color:  #013B5A;
  text-transform: uppercase;

  ${mediaQueries.mobile} {
    font-size: 20px;
  }
`;

export default function SectionHeader(props) {
    return (
      <Container>
        <Text>{props.text}</Text>
      </Container>
    );
  }