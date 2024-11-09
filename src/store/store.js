import { createStore } from "redux";
import MovieReducer from "./reducers/MovieReducer";

const store = createStore(MovieReducer);

export default store;
