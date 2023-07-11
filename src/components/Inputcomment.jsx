import React from "react";
import useInput from "../hooks/useInput";
import Button from "./Button";
import shortid from "shortid";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addnewComment } from "../api/studyTodo";
import { styled } from "styled-components";

function Inputcomment(props) {
  const [inputUser, inputUserHandler, setInputUser] = useInput();
  const [inputComment, inputCommentHandler, setInputComment] = useInput();
  const param = useParams();
  const queryClient = useQueryClient();

  // 코멘트 추가 이벤트
  const postCommentMutation = useMutation(addnewComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(`${param.id}Comments`);
    },
  });

  const handleSubmitButtonClick = (event) => {
    // 유효성 검사
    if (!inputUser || !inputComment) {
      return alert("작성자 또는 내용이 입력되지 않았습니다!");
    }

    const newComment = {
      id: shortid,
      user: inputUser,
      comment: inputComment,
      postid: param.id,
    };
    // post
    postCommentMutation.mutate(newComment);

    setInputUser("");
    setInputComment("");
    alert("저장되었습니다!");
  };

  return (
    <CommentBox>
      <div>
        <div>
          <CommentNameInput
            value={inputUser}
            onChange={inputUserHandler}
            maxlength="10"
            placeholder="이름을 입력해주세요"
          />
        </div>

        <CommentInput
          value={inputComment}
          onChange={inputCommentHandler}
          placeholder="댓글을 입력해주세요"
        />
      </div>
      <ButtonWrapper>
        <Button role="newcomment" onClick={handleSubmitButtonClick}>
          저장
        </Button>
      </ButtonWrapper>
    </CommentBox>
  );
}

export default Inputcomment;

const CommentBox = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 90%;
`;

const CommentNameInput = styled.input`
  padding: 5px;
  outline: none;
  border: 1px solid white;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const CommentInput = styled.textarea`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid white;
  margin-bottom: 8px;
  width: 100%;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.75;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;
