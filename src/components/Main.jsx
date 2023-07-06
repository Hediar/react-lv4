import React from "react";
import { styled } from "styled-components";

function Main() {
  return <MainArea>Main</MainArea>;
}

export default Main;

const MainArea = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  justify-content: center;

  background-color: antiquewhite;
`;
