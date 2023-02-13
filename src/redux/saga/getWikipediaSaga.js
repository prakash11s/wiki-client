import { all, takeEvery, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { GET_WIKIPEDIA } from "../action/types";
import { getWikipediaSuccess, getWikipediaFailure } from "../action";
import {
  ErrorToast
} from "../../utils/helper";

function* getWikipediaRequest() {
  try {
    let res = fetch(
      "https://www.mediawiki.org/w/api.php")
    console.log("LLLLLLLL",res)
    // if (res.data.meta.code === 200) {
    //   yield put(getWikipediaSuccess(res?.data?.data));
    // } else if (res.data.meta.code === 400) {
    //   yield put(getWikipediaFailure(res));
    //   yield toast.error(<ErrorToast msg={res?.data?.meta?.message} />);
    // }
  } catch (e) {
    yield put(getWikipediaFailure());
    yield toast.error(<ErrorToast msg="Something went wrong." />);
  }
}

export function* watchGetWikiPediaAPI() {
  yield takeEvery(GET_WIKIPEDIA, getWikipediaRequest);
}

export default function* rootSaga() {
  yield all([watchGetWikiPediaAPI()]);
}