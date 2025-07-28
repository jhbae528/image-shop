import { combineReducers } from "redux";

// all 함수 임포트
import { all } from "redux-saga/effects";

// 리듀서
import loadingReducer from "./loading";
import authReducer, { authSaga } from "./auth";
import codeGroupReducer, { codeGroupSaga } from "./codegroup";
import codeDetailReducer, { codeDetailSaga } from "./codedetail";
import memberReducer, { memberSaga } from "./member";

import itemReducer, { itemSaga } from "./item";

const rootReducer = combineReducers({
    loading: loadingReducer,
    auth: authReducer,
    codegroup: codeGroupReducer,
    codedetail: codeDetailReducer,
    member: memberReducer,

    item: itemReducer, 
});

export function* rootSaga() {
    console.log("module/index => rootSaga");
    yield all([
        authSaga(),         // 로그인용 auth
        memberSaga(),       // 회원관리
        codeGroupSaga(),    // 코드그룹
        codeDetailSaga(),   // 코드상세

        itemSaga(),
    ]);
}

export default rootReducer;