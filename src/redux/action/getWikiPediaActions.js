import {
  GET_WIKIPEDIA,
  GET_WIKIPEDIA_SUCCESS,
  GET_WIKIPEDIA_FAILURE,
  } from "./types";
  
  export const getWikipedia = () => ({
    type: GET_WIKIPEDIA,
  });
  
  export const getWikipediaSuccess = (payload) => ({
    type: GET_WIKIPEDIA_SUCCESS,
    payload,
  });
  
  export const getWikipediaFailure = () => ({
    type: GET_WIKIPEDIA_FAILURE,
  });