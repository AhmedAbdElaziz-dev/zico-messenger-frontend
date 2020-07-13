import {
  GET_ALL_MESSEGES,
  SEND_MESSEGE,
  DElETE_MESSEGE,
  GET_CONVERSTAION_LIST,
} from "./constants";
const initailState = {
  messeges: [],
  conversationList: [],
  messegeList: [],
};

export default (state = initailState, action) => {
  switch (action.type) {
    case GET_ALL_MESSEGES:
      return { ...state, messeges: action.messeges };
    case SEND_MESSEGE:
      return { ...state, newMessege: action.messege };
    case DElETE_MESSEGE:
      return { ...state, deleteMessege: action.messege };
    case GET_CONVERSTAION_LIST: {
      return { ...state, conversationList: action.conversationList };
    }
    default:
      return state;
  }
};
