import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useInput from "../hooks/useInput";
import Button from "../components/Button";
import { styled } from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { addStudyList } from "../api/studyTodo";
import { useNavigate } from "react-router-dom";

function Post() {
  const [title, onChangeTitleHandler, setTitle] = useInput();
  // TODO : Lv 5 과제에서는 현재 로그인 한 사람으로 입력되게 하기
  const [writer, onChangeWriterHandler, setWriter] = useInput();
  const [contents, onChangeContentHandler, setContent] = useInput();

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation(addStudyList, {
    onSuccess: () => {
      queryClient.invalidateQueries("study");
      console.log("Post 성공");
    },
  });

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();
    // 유효성 검사
    // 1. 제목, 내용 모두 입력되어야 한다.
    if (!title || !writer) {
      return alert("제목 또는 내용이 입력되지 않았습니다!");
    }

    const newStudyTodo = {
      title,
      contents,
      writer,
      isDone: false,
    };

    mutation.mutate(newStudyTodo);

    setTitle("");
    setWriter("");
    setContent("");
    alert("저장되었습니다!");
    navigate("/");
  };

  return (
    <>
      <Header />
      <PostBox>
        <h2>스터디 할 내용 적기</h2>
        <form onSubmit={handleSubmitButtonClick}>
          <div>
            <label>제목</label>
            <input value={title} onChange={onChangeTitleHandler} />
          </div>
          <div>
            <label>작성자</label>
            <input value={writer} onChange={onChangeWriterHandler} />
          </div>
          <div>
            <label>내용</label>
            <textarea value={contents} onChange={onChangeContentHandler} />
          </div>

          <Button type="submit">저장</Button>
        </form>
      </PostBox>

      <Footer />
    </>
  );
}

export default Post;

const PostBox = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;
