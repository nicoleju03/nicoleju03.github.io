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
  font-family: Bacasime Antique;
  font-size: 55px;
  color: #013b5a;

  ${mediaQueries.mobile} {
    font-size: 36px;
  }
`;

export default function SectionHeader(props) {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  );
}
