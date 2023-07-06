import { styled } from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  border: 3px solid
    ${(props) => (props.color === "#000000" ? "rgb(120, 71, 196)" : "#cc99ff")};
  background-color: rgb(255, 255, 255);
  color: ${(props) => props.color};
  height: 30px;
  width: 75px;
  &:active {
    background-color: ${(props) =>
      props.color === "#000000" ? "rgb(102, 58, 168)" : "rgb(219, 106, 80)"};
  }
`;
