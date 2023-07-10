const SET_STUDY = "SET_STUDY";
export const setStudy = (payload) => {
  return {
    type: SET_STUDY,
    payload,
  };
};

const initalState = {};

const study = (state = initalState, action) => {
  switch (action.type) {
    case SET_STUDY:
      return { ...action.payload };
    default:
      return state;
  }
};

export default study;
