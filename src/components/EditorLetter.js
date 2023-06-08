import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  position: relative;
  margin: 2em auto 10% auto;
  width: 60%;
  height: fit-content;
  block-size: fit-content;
  border: 1px solid #013b5a;
  background: #2774af;
  font-family: "Roboto Mono", sans-serif;
  box-sizing: border-box;

  ${mediaQueries.mobile} {
    width: 80%;
  }
`;

const Text = styled.div`
  padding: 1em 3em;
`;

const Content = styled.div`
  margin: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: justify;
  color: #ffffff;
  ${mediaQueries.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export default function EditorLetter(props) {
  return (
    <Container>
      <Text>
        <Content style={{ margin: "auto" }}>
          {props.editor_letter.map((info) => {
            if (info.type === "paragraph") {
              return <p style={{ "padding-top": "10px" }}>{info.content}</p>;
            } else if (info.type === "signoff") {
              return <p>{info.content} </p>;
            } else if (info.type === "closing") {
              return <p style={{ "padding-top": "35px" }}>{info.content}</p>;
            } else {
              return <p>{info.content} </p>;
            }
          })}
        </Content>
      </Text>
    </Container>
  );
}
