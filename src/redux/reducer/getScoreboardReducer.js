import {
  GET_SCOREBOARD,
  GET_SCOREBOARD_SUCCESS,
  GET_SCOREBOARD_FAILURE,
} from "../action/types";

const INIT_STATE = {
  loading: false,
  scoreboardData: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SCOREBOARD:
      return { ...state, loading: true };
    case GET_SCOREBOARD_SUCCESS:
      return { ...state, scoreboardData: action.payload, loading: false };
    case GET_SCOREBOARD_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};