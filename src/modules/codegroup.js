import { createAction, handleAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// 액션타입
export const FETCH_LIST = "codeGroup/FETCH_LIST";
const FETCH_LIST_SUCCESS = "codeGroup/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "codeGroup/FETCH_LIST_FAILURE";

export const FETCH_ONE = "codeGroup/FETCH_ONE";
const FETCH_ONE_SUCCESS = "codeGroup/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "codeGroup/FETCH_ONE_FAILURE";

// 액션 생성 함수
export const fetchList = createAction(FETCH_LIST);
export const fetchOne = createAction(FETCH_ONE, (groupCode) => groupCode);

// 비동기 액션을 수행하는 task 작성
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchCodeGroupList);
const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchCodeGroup);

// 코드그룹 사가 함수
export function* codeGroupSaga() {
    console.log("module/codegroup => codeGroupSaga -> fetchListSaga / fetchOneSage");
    yield takeLatest(FETCH_LIST, fetchListSaga);
    yield takeLatest(FETCH_ONE, fetchOneSaga);
}

// 초기상태
const initialState = {
    codeGroupList:[],
    codeGroup: null,
    error: null,
};

// 리듀서 함수 정의
const codeGroupReducer = handleActions(
    {
        [FETCH_LIST]: (state) => ({
            ...state,
            codeGroupList: [],
        }),
        [FETCH_LIST_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            codeGroupList: data
        }),
        [FETCH_LIST_FAILURE]: (state, { payload: data }) => ({
            ...state,
            error: data
        }),
        [FETCH_ONE]: (state) => ({
            ...state,
            codeGroup: null,
        }),
        [FETCH_ONE_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            codeGroup: data
        }),
        [FETCH_ONE_FAILURE]: (state, { payload: data }) => ({
            ...state,
            error: data
        }),
    },
    initialState
);

export default codeGroupReducer;
