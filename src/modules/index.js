import { combineReducers } from "redux";

// all 함수 임포트
import { all } from "redux-saga/effects";

// 리듀서
import authReducer, { authSaga } from "./auth";
import codeGroupReducer, { codeGroupSaga } from "./codegroup";
import codeDetailReducer, { codeDetailSaga } from "./codedetail";

import itemReducer, { itemSaga } from "./item";
import loadingReducer from "./loading";

const rootReducer = combineReducers({
    auth: authReducer,
    codegroup: codeGroupReducer,
    codedetail: codeDetailReducer,
    item: itemReducer, 
    loading: loadingReducer,
});

export function* rootSaga() {
    console.log("module/index => rootSaga");
    yield all([
        authSaga(), // 로그인용 auth 관련 saga 실행
        itemSaga(),
        codeGroupSaga(),
        codeDetailSaga(),
    ]);
}

export default rootReducer;