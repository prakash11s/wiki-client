import {
  GET_SCOREBOARD,
  GET_SCOREBOARD_SUCCESS,
  GET_SCOREBOARD_FAILURE,
  } from "./types";
  
  export const getScoreboard = (payload) => ({
    type: GET_SCOREBOARD,
    payload
  });
  
  export const getScoreboardSuccess = (payload) => ({
    type: GET_SCOREBOARD_SUCCESS,
    payload,
  });
  
  export const getScoreboardFailure = () => ({
    type: GET_SCOREBOARD_FAILURE,
  });