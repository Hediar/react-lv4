import React from "react";
import { useQuery } from "react-query";
import { getStudyList } from "../api/studyTodo";
import Card from "./Card";
import { styled } from "styled-components";

function CardList() {
  const { isLoading, isError, data } = useQuery("study", getStudyList);

  if (isLoading) {
    return <h1>로딩중</h1>;
  }
  if (isError) {
    return <h1>오류가 발생하였습니다....!!!</h1>;
  }

  return (
    <>
      <CardListBox>
        {data.map((item) => {
          return <Card key={item.id} study={item} />;
        })}
      </CardListBox>
    </>
  );
}

export default CardList;

const CardListBox = styled.div`
  display: flex;
  padding: 20px;
  margin: -1rem;
  flex-wrap: wrap;
`;
