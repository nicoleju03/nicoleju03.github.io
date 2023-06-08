import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background: #D9D9D9;
  border-bottom: #D9D9D9;
`;

const Illo = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Credits = styled.div`
  /* position: absolute; */
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  color:  black;
  /* bottom: -3em; */
  /* right: 0.5em; */
  width: 70%;
  margin-top: 5px;
  margin-right: 8px;
  float: right;
  text-align: right;

  ${mediaQueries.mobile} {
    font-size: 8px;
  }
`;

export default function Landing(props) {
    return (
      <Container>
        <Illo src={props.image}></Illo>
        <Credits>{props.credits}</Credits>
      </Container>
    );
  }