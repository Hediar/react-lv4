import { styled } from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  background-color: #172b4d;
  color: ${(props) => props.color};
  height: 30px;
  width: 75px;
  margin: 6px;

  &:active {
    background-color: ${(props) =>
      props.color === "#000000" ? "rgb(102, 58, 168)" : "#234072"};
  }
`;
