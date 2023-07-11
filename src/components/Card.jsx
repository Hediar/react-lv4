import React from "react";
import { styled } from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import useDelete from "../hooks/useDelete";

function Card({ study }) {
  const navigate = useNavigate();
  const [deleteStudyMutation] = useDelete();

  const findCardId = () => {
    if (window.confirm("정말 삭제하시겠습니까??")) {
      //확인
      deleteStudyMutation.mutate(study.id);
      alert("삭제되었습니다!");
    } else {
      return false;
    }
  };

  return (
    <CardBox done={`${study.isDone}`}>
      <div
        onClick={() => {
          navigate(`/detailstudy/${study.id}`);
        }}
      >
        <CardNav>
          <div>{study.writer}</div>
        </CardNav>
        <Cardcontext>{study.title}</Cardcontext>
      </div>
      <MdDeleteForever
        size="25"
        onClick={() => findCardId()}
        style={{ position: "absolute", top: "10px", right: "10px" }}
      ></MdDeleteForever>
      <Cardfooter>
        <div>
          <Button role={"complete"} cardKey={study.id} complete={study.isDone}>
            {study.isDone ? "완료" : "미완료"}
          </Button>
        </div>
      </Cardfooter>
    </CardBox>
  );
}

export default Card;

const CardBox = styled.div`
  background-color: ${(props) =>
    props.done === "true" ? "#9dc3c1" : "#6E7783"};
  width: 18rem;
  border-radius: 4px;
  margin: 1rem;
  flex-direction: column;
  position: relative; // position static외를 넣어주어야 absolute가 동작
  &:hover {
    cursor: pointer;
  }
`;

const CardNav = styled.div`
  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Cardcontext = styled.div`
  font-size: 25px;
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
  &:hover {
    cursor: default;
  }
`;
