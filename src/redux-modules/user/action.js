import { USER_LOGIN, USER_REGISTER } from "./constants";
import { login, register } from "./api";

export const userLogin = (newUser) => {
  return async (dispatch) => {
    const user = await login(newUser);
    dispatch(userloginRes(user));
  };
};
const userloginRes = (user) => {
  return { type: USER_LOGIN, user };
};

export const userRegister = (newUser) => {
  return async (dispatch) => {
    const user = await register(newUser);
    dispatch(userRegisterRes(user));
  };
};
const userRegisterRes = (user) => {
  return {
    type: USER_REGISTER,
    user,
  };
};
