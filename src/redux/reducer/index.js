import { combineReducers } from "redux";

import GetWikipedia from "./getWikipediaReducer";
import GetScoreBoard from "./getScoreboardReducer";

const appReducer = combineReducers({
    GetWikipedia,
    GetScoreBoard
});
const reducers = (state, action) => {
    return appReducer(state, action);
};

export default reducers;