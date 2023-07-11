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
    },
  });

  const handleSubmitButtonClick = (event) => {
    // 유효성 검사
    // 제목, 내용 모두 입력되어야 한다.
    if (!title.trim()) {
      return alert("제목이 입력되지 않았습니다!");
    } else if (!writer.trim()) {
      return alert("내용이 입력되지 않았습니다!");
    } else if (!contents.trim()) {
      return alert("내용이 입력되지 않았습니다!");
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
        <h2>새 글 작성하기</h2>
        <div>
          <PostInputTitle
            value={title}
            onChange={onChangeTitleHandler}
            placeholder="제목"
            maxlength="20"
          />
        </div>
        <div>
          <PostInputName
            value={writer}
            onChange={onChangeWriterHandler}
            placeholder="이름"
            maxlength="10"
          />
        </div>
        <div>
          <PostContentArea
            value={contents}
            onChange={onChangeContentHandler}
            placeholder="내용을 입력해주세요"
          />
        </div>

        <ButtonArea>
          <Button
            type="submit"
            onClick={() => {
              handleSubmitButtonClick();
            }}
          >
            저장
          </Button>
        </ButtonArea>
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

const PostInputTitle = styled.input`
  padding: 5px;
  outline: none;
  border: 1px solid white;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const PostInputName = styled.input`
  padding: 5px;
  outline: none;
  border: 1px solid white;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const PostContentArea = styled.textarea`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid white;
  margin-bottom: 8px;
  height: 650px;
  width: 100%;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.75;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: right;
`;
