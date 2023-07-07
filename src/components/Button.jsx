import { styled } from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();

  const buttonHandler = (role) => {
    if (role === "move") {
      navigate(`${props.url}`);
    } else if (role === "filter") {
      console.log("filter");
    }
  };

  if (props.styleType === "icon") {
    return (
      <ButtonIconStyle onClick={(event) => buttonHandler(props.role)}>
        {props.children}
      </ButtonIconStyle>
    );
  }

  return (
    <ButtonStyle onClick={(event) => buttonHandler(props.role)}>
      {props.children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  background-color: #172b4d;
  color: white;
  height: 30px;
  width: 75px;
  margin: 6px;

  &:active {
    background-color: "#234072";
  }
`;

const ButtonIconStyle = styled.button`
  cursor: pointer;
  border: none;
  background-color: #d8e6e7;
`;
