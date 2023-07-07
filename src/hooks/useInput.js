import { useState } from "react";

const useInput = () => {
  // state
  const [value, setValue] = useState("");

  // handler
  const handler = (e) => {
    setValue(e.target.value);
  };
  return [value, handler];
};

export default useInput;
