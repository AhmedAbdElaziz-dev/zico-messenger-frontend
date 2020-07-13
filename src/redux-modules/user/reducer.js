import { USER_LOGIN, USER_REGISTER } from "./constants";

const initialState = {
  user: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case USER_REGISTER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
