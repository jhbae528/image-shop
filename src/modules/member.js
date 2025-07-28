import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

// 액션타입
export const FETCH_LIST = "member/FETCH_LIST";
const FETCH_LIST_SUCCESS = "member/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "member/FETCH_LIST_FAILURE";

export const FETCH_ONE = "member/FETCH_ONE";
const FETCH_ONE_SUCCESS = "member/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "member/FETCH_ONE_FAILURE";

export const fetchList = createAction(FETCH_LIST);
export const fetchOne = createAction(FETCH_ONE, (userNo) => userNo);

const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchMemberList);
const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchMember);

export function* memberSaga() {
    console.log("module/member => memberSaga -> fetchListSaga / fetchOneSage");
    yield takeLatest(FETCH_LIST, fetchListSaga);
    yield takeLatest(FETCH_ONE, fetchOneSaga);
}

const initialState = {
    memberList: [],
    member: null,
    error: null,
};

// 리듀서
const memberReducer = handleActions(
    {
        [FETCH_LIST]: (state) => ({
            ...state,
            memberList: [],
        }),
        [FETCH_LIST_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            memberList: data,
        }),
        [FETCH_LIST_FAILURE]: (state, { payload: data }) => ({
            ...state,
            error: data,
        }),
        [FETCH_ONE]: (state) => ({
            ...state,
            member: null,
        }),
        [FETCH_ONE_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            member: data
        }),
        [FETCH_ONE_FAILURE]: (state, { payload: data }) => ({
            ...state,
            error: data
        }),
    },
    initialState
);

export default memberReducer;

