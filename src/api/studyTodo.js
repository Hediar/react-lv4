import axios from "axios";

// 조회
const getStudyList = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/study`);
  console.log("studyTodo res", response);
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
  console.log("detail res", response);
  return response.data;
};

// 해당 게시판 코멘트 조회
const getComments = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/comments/${id}`
  );
  console.log("comments res", response);
  return response.data;
};

export { getStudyList, addStudyList, getStudy, getComments };
