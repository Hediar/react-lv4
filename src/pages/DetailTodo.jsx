import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { getStudy } from "../api/studyTodo";
import { useQuery } from "react-query";

function DetailTodo() {
  const param = useParams();
  const { isLoading, isError, data } = useQuery(`${param.id}`, () =>
    getStudy(param.id)
  );

  if (isLoading) {
    return (
      <>
        <Header />
        <h1>로딩중</h1>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Header />
        <h1>오류가 발생하였습니다....!!!</h1>
      </>
    );
  }

  return (
    <>
      <Header />
      <DetailBox>
        <h1>{`${data.title}`}</h1>
        <div>{`작성자: ${data.writer}`}</div>
        <div>{`완료 여부: ${data.isDone}`}</div>
        <div>{`내용 : ${data.contents}`}</div>
      </DetailBox>
      <Footer />
    </>
  );
}

export default DetailTodo;

const DetailBox = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;
