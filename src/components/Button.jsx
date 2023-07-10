import { styled } from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { updateComplete } from "../api/studyTodo";

const Button = (props) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const updateCompleteMutation = useMutation(updateComplete, {
    onSuccess: () => {
      queryClient.invalidateQueries("study");
    },
  });

  const IconbuttonHandler = (role) => {
    if (role === "move") {
      navigate(`${props.url}`);
    } else {
      console.log("다른기능");
    }
  };

  const basicButtonHandler = (role) => {
    if (role === "complete") {
      const newComplete = { id: props.cardKey, isDone: !props.complete };
      updateCompleteMutation.mutate(newComplete);
    } else if (role === "filter") {
      console.log("filter 및 정렬");
    }
  };

  if (props.styleType === "icon") {
    return (
      <ButtonIconStyle onClick={(event) => IconbuttonHandler(props.role)}>
        {props.children}
      </ButtonIconStyle>
    );
  }
  return (
    <ButtonStyle onClick={() => basicButtonHandler(props.role)}>
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
    background-color: #234072;
  }
`;

const ButtonIconStyle = styled.button`
  cursor: pointer;
  border: none;
  background-color: #d8e6e7;
`;
