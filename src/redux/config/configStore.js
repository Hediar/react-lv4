import { configureStore } from "@reduxjs/toolkit";
import study from "./modules/study";

const store = configureStore({
  reducer: {
    study,
  },
});

export default store;
