import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import * as api from "../lib/api";
import client from "../lib/client";

// 액션 타입
const LOGIN = "auth/LOGIN";
const SET_ACCESS_TOKEN = "auth/SET_ACCESS_TOKEN";
const SET_MY_INFO = "auth/SET_MY_INFO";
const CHECK_MY_INFO = "auth/CHECK_MY_INFO";

// 액션 생성함수
export const login = createAction(LOGIN, ({ userId, password }) => ({ userId, password }));
export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken) => accessToken);
export const checkMyInfo = createAction(CHECK_MY_INFO);
export const setMyInfo = createAction(SET_MY_INFO, (myInfo) => myInfo);

const initialState = {
    accessToken: "",
    myInfo: null,   // 로그인한 정보
};

// 리듀서 함수 정의
const authReducer = handleActions(
    {
        [SET_ACCESS_TOKEN]: (state, { payload: data }) => ({
            ...state,
            accessToken: data,
        }),
        [SET_MY_INFO]: (state, { payload: data }) => ({
            ...state,
            myInfo: data,
        }),
    },
    initialState
);

// 비동기 액션을 수행하는 태스크 작성
function* loginSaga(action) {
    console.log("module/auth => loginSaga");
    try {
        const { userId, password } = action.payload;
        
        const response = yield call(api.signIn, userId, password);

        const { authorization } = response.headers;
        const accessToken = authorization.substring(7);

        console.log("loginSaga response = " + response);
        console.log("loginSaga authorization = " + authorization);
        console.log("loginSaga accessToken = " + accessToken);

        yield put(setAccessToken(accessToken));

        client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    }catch(e) {
        console.log("loginSaga error = " + e);
    }
}

function* checkMyInfoSaga() {
    try {
        const response = yield call(api.getMyInfo);

        yield put(setMyInfo(response.data));
    }catch (e) {
        console.log(e);
    }
}

// 로그인 사가 함수 작성 (상세 조회 태스크 수행)
export function* authSaga() {
    console.log("module/auth => authSaga");
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(CHECK_MY_INFO, checkMyInfoSaga);
}

export default authReducer;