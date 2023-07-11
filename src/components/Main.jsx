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
      <PostButton>
        <Button role={"move"} url={"/post"} styleType={"icon"}>
          <BsFillPlusCircleFill size="50" />
        </Button>
      </PostButton>
    </>
  );
}

export default Main;

const MainArea = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const PostButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 30px;
`;
