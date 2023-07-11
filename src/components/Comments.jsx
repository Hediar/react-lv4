import React, { useState } from "react";
import { styled } from "styled-components";
import useInput from "../hooks/useInput";
import Button from "./Button";
import { useMutation, useQueryClient } from "react-query";
import { deleteComment, updateComment } from "../api/studyTodo";

function Comments({ codata }) {
  const [updateState, setUpdateState] = useState(false);
  const [updateInputComment, updateInputCommentHandler, setUpdateInputComment] =
    useInput();
  const queryClient = useQueryClient();

  // 삭제
  const deleteCommentMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(`${codata.postid}Comments`);
      console.log("comment Delete 성공");
    },
  });
  const deleteCommentHandler = () => {
    if (window.confirm("이 코멘트를 삭제하시겠습니까??")) {
      //확인
      deleteCommentMutation.mutate(codata.id);
      alert("삭제되었습니다!");
    } else {
      return false;
    }
  };

  // 수정
  const updateCommentMutation = useMutation(updateComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(`${codata.postid}Comments`);
      console.log("comment Update 성공");
    },
  });

  const updateCommentHandler = () => {
    const newComment = {
      ...codata,
      comment: updateInputComment,
    };
    updateCommentMutation.mutate(newComment);
  };
  return (
    <>
      <CommentBox>
        {!updateState && (
          <>
            <WriterBox>
              By_{`${codata.user}`}
              <div>
                <CommentButton
                  onClick={() => {
                    setUpdateState(!updateState);
                    setUpdateInputComment(codata.comment);
                  }}
                >
                  수정
                </CommentButton>
                <CommentButton
                  onClick={() => {
                    deleteCommentHandler();
                  }}
                >
                  삭제
                </CommentButton>
              </div>
            </WriterBox>
            <div>{`${codata.comment}`}</div>
          </>
        )}
        {updateState && (
          <>
            <div>
              <label>수정내용</label>
              <textarea
                value={updateInputComment}
                onChange={updateInputCommentHandler}
              />
            </div>
            <Button
              onClick={() => {
                updateCommentHandler();
                setUpdateState(!updateState);
              }}
            >
              저장
            </Button>
          </>
        )}
      </CommentBox>
    </>
  );
}

export default Comments;

const CommentBox = styled.div`
  background-color: #9dc3c1;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const WriterBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 6px;
`;

const CommentButton = styled.button`
  font-size: 12px;
  border: 0;
  color: #999;
  background-color: transparent;
  &:hover {
    color: #686868;
    cursor: pointer;
  }
`;
