import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  position: relative;
  margin: 80px auto 10% auto;
  padding-bottom: 100px;
  width: 50%;
  height: fit-content;
  block-size: fit-content;
  border: 1px solid #013b5a;
  background: #ffd100;
  font-family: "Roboto Mono", sans-serif;

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
  font-size: 16px;
  line-height: 21.1px;
  text-align: justify;
  color: #013b5a;
  ${mediaQueries.mobile} {
    font-size: 14px;
  }
`;

export default function About(props) {
  return (
    <Container>
      <Text>
        <Content>
          {props.about.map((info) => {
            if (info.type === "paragraph") {
              return <p>{info.content}</p>;
            } else if (info.type === "Name_Position") {
              return (
                <div style={{ "text-align": "left" }}>{info.content} </div>
              );
            } else if (info.type === "Section_header") {
              return (
                <p
                  style={{
                    "font-weight": "bold",
                    "margin-top": "30px",
                    "margin-bottom": "0px",
                  }}
                >
                  {info.content}{" "}
                </p>
              );
            } else {
              return <p>{info.content}</p>;
            }
          })}
        </Content>
      </Text>
    </Container>
  );
}
