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
          <Button color="#ffffff">LogIn</Button>
        </HeaderNav>
        <HeaderMainArea>
          <h1>스터디 플래너</h1>
        </HeaderMainArea>
      </HeaderArea>
    </>
  );
}

export default Header;

const HeaderArea = styled.div`
  margin: 0 auto;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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
  background-color: white;
  h1 {
    background-color: white;
  }
`;
