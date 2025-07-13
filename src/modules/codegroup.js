import { createAction, handleAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// 액션타입
export const READ_LIST = "codeGroup/READ_LIST";
const READ_LIST_SUCCESS = "codeGroup/READ_LIST_SUCCESS";
const READ_LIST_FAILURE = "codeGroup/READ_LIST_FAILURE";

export const READ_ONE = "codeGroup/READ_ONE";
const READ_ONE_SUCCESS = "codeGroup/READ_ONE_SUCCESS";
const READ_ONE_FAILURE = "codeGroup/READ_ONE_FAILURE";

// 액션 생성 함수
export const readList = createAction(READ_LIST);
export const readOne = createAction(READ_ONE, (groupCode) => groupCode);

// 초기상태
const initialState = {
    codeGroups:[],
    codeGroup: null,
    error: null,
};

// 비동기 액션을 수행하는 task 작성
const readListSaga = createRequestSaga(READ_LIST, api.readCodeGroupList);
const readOneSaga = createRequestSaga(READ_ONE, api.readCodeGroup);

// 코드구릅 사가 함수
export function* codeGroupSaga() {
    console.log("module/codeGroup => codeGroupSaga");
    yield takeLatest(READ_LIST, readListSaga);
    yield takeLatest(READ_ONE, readOneSaga);
}

// 리듀서 함수 정의
const codeGroupReducer = handleActions(
    {
        [READ_LIST]: (state) => ({
            ...state,
            codeGroups: [],
        }),
        [READ_LIST_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            codeGroups: data
        }),
        [READ_LIST_FAILURE]: (state, { payload: data }) => ({
            ...state,
            error: data
        }),
        [READ_ONE]: (state) => ({
            ...state,
            codeGroup: null,
        }),
        [READ_ONE_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            codeGroup: data
        }),
        [READ_ONE_FAILURE]: (state, { payload: data }) => ({
            ...state,
            error: data
        }),
    },
    initialState
)

export default codeGroupReducer;
