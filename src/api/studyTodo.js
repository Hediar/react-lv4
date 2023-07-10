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

// 게시글 삭제
const deleteStudy = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/study/${id}`
  );
  console.log("delete", response);
};

// 해당 게시판 코멘트 조회
const getComments = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/comments/${id}`
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
  deleteStudy,
  getComments,
  deleteComment,
};
