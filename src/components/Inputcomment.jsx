import React from "react";
import useInput from "../hooks/useInput";
import Button from "./Button";
import shortid from "shortid";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addnewComment } from "../api/studyTodo";

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
    <>
      <div>
        <div>
          <label>이름</label>
          <input value={inputUser} onChange={inputUserHandler} maxlength="10" />
        </div>
        <textarea
          value={inputComment}
          onChange={inputCommentHandler}
          placeholder="댓글을 입력해주세요"
        />
      </div>
      <Button role="newcomment" onClick={handleSubmitButtonClick}>
        저장
      </Button>
    </>
  );
}

export default Inputcomment;
