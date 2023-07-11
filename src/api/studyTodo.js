import axios from "axios";

// 조회
const getStudyList = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/study`);
  return response.data;
};

// 추가
const addStudyList = async (newStudy) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/study`, newStudy);
};

// 상세 페이지 조회
const getStudy = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/study/${id}`
  );
  return response.data;
};

// 게시글 수정
const updateStudy = async (newStudy) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/study/${newStudy.id}`,
    newStudy
  );
};

// 게시글 삭제
const deleteStudy = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/study/${id}`
  );
};

// 완료/미완료 상태 변경
const updateComplete = async (newComplete) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/study/${newComplete.id}`,
    { isDone: newComplete.isDone }
  );
  return response.data;
};

/* 코멘트 */

// 코멘트 추가
const addnewComment = async (newComment) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/comments`,
    newComment
  );
};

// 해당 게시판 코멘트 조회
const getComments = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/comments/?postid=${id}`
  );
  return response.data;
};

// 코멘트 수정
const updateComment = async (newComment) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/comments/${newComment.id}`,
    newComment
  );
};

// 코멘트 삭제
const deleteComment = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/comments/${id}`
  );
};

export {
  getStudyList,
  addStudyList,
  getStudy,
  updateStudy,
  deleteStudy,
  updateComplete,
  addnewComment,
  getComments,
  updateComment,
  deleteComment,
};
