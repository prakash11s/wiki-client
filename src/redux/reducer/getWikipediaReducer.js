import {
  GET_WIKIPEDIA,
  GET_WIKIPEDIA_SUCCESS,
  GET_WIKIPEDIA_FAILURE,
} from "../action/types";

const INIT_STATE = {
  loading: false,
  wikipediaData: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WIKIPEDIA:
      return { ...state, loading: true };
    case GET_WIKIPEDIA_SUCCESS:
      return { ...state, wikipediaData: action.payload, loading: false };
    case GET_WIKIPEDIA_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};