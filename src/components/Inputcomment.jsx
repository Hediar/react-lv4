import React from "react";
import useInput from "../hooks/useInput";
import Button from "./Button";

function Inputcomment() {
  const [inputUser, inputUserHandler, setInputUser] = useInput();
  const [inputComment, inputCommentHandler, setInputComment] = useInput();
  return (
    <>
      <div>
        <div>
          <label>작성자</label>
          <input value={inputUser} onChange={inputUserHandler} />
        </div>
        <textarea
          value={inputComment}
          onChange={inputCommentHandler}
          placeholder="댓글을 입력해주세요"
        />
      </div>
      <Button>저장</Button>
    </>
  );
}

export default Inputcomment;
