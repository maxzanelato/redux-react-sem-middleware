import { takeLatest, all } from "redux-saga/effects";

import { asyncAddTodo } from "./todos/sagas";

export default function* rootSagas() {
  yield all([takeLatest("ASYNC_ADD_TODO", asyncAddTodo)]);
}
