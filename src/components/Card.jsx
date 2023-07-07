import React from "react";
import { styled } from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "./Button";

function Card({ study }) {
  return (
    <CardBox>
      <CardNav>
        <div>작성자 {study.writer}</div>
        <MdDeleteForever IoIosClose size="25"></MdDeleteForever>
      </CardNav>
      <Cardcontext>{study.title}</Cardcontext>
      <Cardfooter>
        <div>
          <Button color="#ffffff">완료/미완료</Button>
        </div>
      </Cardfooter>
    </CardBox>
  );
}

export default Card;

const CardBox = styled.div`
  background-color: #9dc3c1;
  width: 18rem;
  border-radius: 4px;
  margin: 1rem;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;

const CardNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Cardcontext = styled.div`
  margin: 10px;
  line-height: 1.5;
  height: 3.9375rem;
`;

const Cardfooter = styled.div`
  background-color: white;
  padding: 0.625rem 1rem;
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: right;
`;
