import { combineReducers} from "redux";
// import todos from "./todos";
import accountsList from "./accountsList";
import exampleDataReducer from "./exampleDataReducer";
// export const getTodos = state => state.todos;

export const getAccList = state => state.accountsList;
export const getExampleData = state => {
  // console.log(state);

return  state.exampleDataReducer
};

export default combineReducers({
  // todos,
  accountsList,
  exampleDataReducer
})