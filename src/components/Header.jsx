import React from "react";
import { styled } from "styled-components";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderArea>
        <HeaderNav>
          <IoHomeSharp
            IoIosClose
            size="25"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
          Nav
          <Button color="#000000">LogIn</Button>
        </HeaderNav>
        <HeaderMainArea>Header</HeaderMainArea>
      </HeaderArea>
    </>
  );
}

export default Header;

const HeaderArea = styled.div`
  margin: 0 auto;
  padding: 10px;

  background-color: aqua;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: blue;
`;

const HeaderMainArea = styled.div`
  height: 120px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: burlywood;
`;
