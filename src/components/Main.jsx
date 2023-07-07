import React from "react";
import { styled } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Button } from "./Button";
import Card from "./Card";

function Main() {
  return (
    <>
      <GlobalStyle />
      <MainArea>
        <Card />
      </MainArea>
      <Button color="#ffffff">+</Button>
    </>
  );
}

export default Main;

const MainArea = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;
