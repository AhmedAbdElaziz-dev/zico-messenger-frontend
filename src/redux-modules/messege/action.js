import {
  SEND_MESSEGE,
  DElETE_MESSEGE,
  GET_ALL_MESSEGES,
  GET_CONVERSTAION_LIST,
} from "./constants";
import { addMessege, getMessges, deleteMessegeById } from "./api";
import { getConversationList } from "./api.mock";

export const conversationList = () => {
  return async (dispatch) => {
    const newList = await getConversationList();
    dispatch(coversationListRes(newList));
  };
};
const coversationListRes = (conversationList) => {
  return { type: GET_CONVERSTAION_LIST, conversationList };
};
export const getAllMessges = (id) => {
  return async (dispatch) => {
    const messeges = await getMessges();
    dispatch(getAllMessegesRes(messeges));
  };
};

const getAllMessegesRes = (messeges) => {
  return {
    type: GET_ALL_MESSEGES,
    messeges,
  };
};

export const sendMessege = (newMessege) => {
  return async (dispatch) => {
    const messege = await addMessege(newMessege);
    dispatch(sendMessegeRes(messege));
  };
};

const sendMessegeRes = (messege) => {
  return { type: SEND_MESSEGE, messege };
};

export const deleteMessege = (messegeId) => {
  return async (dispatch) => {
    const messege = await deleteMessegeById(messegeId);
    dispatch(deleteMessegeRes(messege));
  };
};

const deleteMessegeRes = (messege) => {
  return {
    type: DElETE_MESSEGE,
    messege,
  };
};
