import { all } from "redux-saga/effects";
import GetWikipedia from "./getWikipediaSaga";
import GetScoreBoard from "./getScoreboardSaga";

export default function* rootSaga() {
    yield all([
        GetWikipedia(),
        GetScoreBoard()
    ]);
}