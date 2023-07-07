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

export { getStudyList, addStudyList };
