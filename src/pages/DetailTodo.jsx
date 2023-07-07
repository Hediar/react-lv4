import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { getComments, getStudy } from "../api/studyTodo";
import { useQuery } from "react-query";
import Button from "../components/Button";
import Comments from "../components/Comments";

function DetailTodo() {
  const param = useParams();

  const {
    isLoading,
    isError,
    data: study,
  } = useQuery(`${param.id}`, () => getStudy(param.id));

  console.log("1");
  const {
    isLoading: coisLoading,
    isError: coisError,
    data: comments,
  } = useQuery(`${param.id}Comments`, () => getComments(param.id));

  if (isLoading || coisLoading) {
    return (
      <>
        <Header />
        <h1>로딩중</h1>
      </>
    );
  }
  if (isError || coisError) {
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
        <h1>{`${study.title}`}</h1>
        <div>
          <div>{`작성자: ${study.writer}`}</div>
          <Button>수정</Button>
          <Button>삭제</Button>
        </div>
        <div>{`완료 여부: ${study.isDone}`}</div>
        <div>{`내용 : ${study.contents}`}</div>
      </DetailBox>
      <DetailBox>
        {comments.userComments?.map((comment) => (
          <Comments codata={comment} key={comment.user} />
        ))}
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
