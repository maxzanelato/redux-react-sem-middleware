import { put, call } from "redux-saga/effects";

export function* asyncAddTodo(action) {
  try {
    const resp = yield call(apiGet, action.payload.text);
    yield put({ type: "ADD_TODO", payload: { text: resp } });
  } catch (err) {
    yield put(err);
  }
}

function apiGet(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " do Max");
    }, 2000);
  });
}
