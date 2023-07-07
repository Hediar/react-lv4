import React from "react";
import { styled } from "styled-components";

function Comments({ codata }) {
  return (
    <>
      <CommentBox>
        <div> {`${codata.comment}`}</div>
        <div> By_{`${codata.user}`}</div>
      </CommentBox>
    </>
  );
}

export default Comments;

const CommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #9dc3c1;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;
