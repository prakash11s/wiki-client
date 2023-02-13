import { all, takeEvery, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { GET_SCOREBOARD } from "../action/types";
import { getScoreboardSuccess, getScoreboardFailure } from "../action";
import API from "../../utils/api";
import {
  ErrorToast
} from "../../utils/helper";

function* getWikipediaRequest(action) {
  console.log("action",action)
  try {
    const res = yield API.get(`scoreboard?seven_day=${action?.payload?.queryParams?.seven_day}&one_day=${action?.payload?.queryParams?.one_day}
    &one_hour=${action?.payload?.queryParams?.one_hour}&start_date=${action?.payload?.queryParams?.start_date}
    &end_date=${action?.payload?.queryParams?.end_date}`);
    if (res.status === 200) {
      yield put(getScoreboardSuccess(res?.data?.data));
    } else if (res.data.meta.code === 400) {
      yield put(getScoreboardFailure(res));
      yield toast.error(<ErrorToast msg={res?.data?.meta?.message} />);
    }
  } catch (e) {
    yield put(getScoreboardFailure());
    yield toast.error(<ErrorToast msg="Something went wrong." />);
  }
}

export function* watchGetWikiPediaAPI() {
  yield takeEvery(GET_SCOREBOARD, getWikipediaRequest);
}

export default function* rootSaga() {
  yield all([watchGetWikiPediaAPI()]);
}