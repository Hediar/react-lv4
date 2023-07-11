import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { getComments, getStudy } from "../api/studyTodo";
import { useQuery } from "react-query";
import Button from "../components/Button";
import Comments from "../components/Comments";
import useInput from "../hooks/useInput";
import Inputcomment from "../components/Inputcomment";
import useDelete from "../hooks/useDelete";

function DetailTodo() {
  const param = useParams();
  const navigate = useNavigate();
  const [updateState, setUpdateState] = useState(false);

  const [deleteStudyMutation] = useDelete();

  const deleteButtonHandler = () => {
    if (window.confirm("정말 삭제하시겠습니까??")) {
      //확인
      deleteStudyMutation.mutate(study.id);
      alert("삭제되었습니다!");
      navigate("/");
    } else {
      return false;
    }
  };

  const {
    isLoading,
    isError,
    data: study,
  } = useQuery(`${param.id}`, () => getStudy(param.id));

  const {
    isLoading: coisLoading,
    isError: coisError,
    data: comments,
  } = useQuery(`${param.id}Comments`, () => getComments(param.id));

  const [updateTitle, updateTitleHandler, setUpdateTitle] = useInput();
  const [updateContent, updateContentHandler, setUpdateContent] = useInput();

  // 업데이트 내용
  const newStudy = {
    ...study,
    title: updateTitle,
    contents: updateContent,
  };

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
        {!updateState && (
          <>
            <h1>{`${study.title}`}</h1>
            <div>
              <div>{`작성자: ${study.writer}`}</div>

              <Button
                onClick={() => {
                  setUpdateState(true);
                  setUpdateTitle(study.title);
                  setUpdateContent(study.contents);
                }}
              >
                수정
              </Button>
              <Button
                onClick={() => {
                  deleteButtonHandler();
                }}
              >
                삭제
              </Button>
            </div>
            <div>{`완료 여부: ${study.isDone}`}</div>
            <div>{`내용 : ${study.contents}`}</div>
            <Inputcomment data={comments}></Inputcomment>
            {comments ? (
              <>
                <div>
                  {comments?.map((comment) => (
                    <Comments codata={comment} key={comment.id} />
                  ))}
                </div>
              </>
            ) : coisError ? (
              <p>댓글을 불러오지 못했습니다.</p>
            ) : coisLoading ? (
              <p>댓글 로딩중</p>
            ) : null}
          </>
        )}
        {updateState && (
          <>
            <div>
              <label>제목</label>
              <input value={updateTitle} onChange={updateTitleHandler} />
            </div>
            <div>
              <label>내용</label>
              <textarea value={updateContent} onChange={updateContentHandler} />
            </div>
            <Button
              role={"update"}
              update={newStudy}
              onClick={() => {
                setUpdateState(!updateState);
                console.log("저장");
              }}
            >
              저장
            </Button>
          </>
        )}
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
