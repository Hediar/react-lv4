import React from "react";
import { styled } from "styled-components";
import Button from "./Button";
import CardList from "./CardList";
import { BsFillPlusCircleFill } from "react-icons/bs";

function Main() {
  return (
    <>
      <MainArea>
        <CardList />
      </MainArea>
      <Button role={"move"} url={"/post"} styleType={"icon"}>
        <BsFillPlusCircleFill size="30" />
      </Button>
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
