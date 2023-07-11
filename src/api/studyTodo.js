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
  console.log("detail", response);
  return response.data;
};

// 게시글 수정
const updateStudy = async (newStudy) => {
  const response = await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/study/${newStudy.id}`,
    newStudy
  );
  console.log("수정", response);
};

// 게시글 삭제
const deleteStudy = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/study/${id}`
  );
  console.log("delete", response);
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
  console.log("comments add res", response);
};

// 해당 게시판 코멘트 조회
const getComments = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/comments/?postid=${id}`
  );
  console.log("comments res", response);
  return response.data;
};

// 코멘트 삭제
const deleteComment = async (deComments, id) => {
  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/comments/${id}`,
    deComments
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
  deleteComment,
};
