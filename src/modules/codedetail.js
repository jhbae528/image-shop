import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

export const FETCH_LIST = "codeDetail/FETCH_LIST";
const FETCH_LIST_SUCCESS = "codeDetail/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "codeDetail/FETCH_LIST_FAILURE";

export const FETCH_ONE = "codeDetail/FETCH_ONE";
const FETCH_ONE_SUCCESS = "codeDetail/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "codeDetail/FETCH_ONE_FAILURE";

// 액션 생성 함수
export const fetchList = createAction(FETCH_ONE, (groupCode, codeValue) => ({ groupCode, codeValue }));
export const fetchOne = createAction(FETCH_LIST);

// 비동기 액션을 수행하는 태스크
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchCodeDetailList);
const fetchOneSage = createRequestSaga(FETCH_ONE, api.fetchCodeDeatil);

// 코드 사가 함수
export function* codeDetailSaga() {
    console.log("module/codedetails => codeDetailSaga");
    yield takeLatest(FETCH_LIST, fetchListSaga);
    yield takeLatest(FETCH_ONE, fetchOneSage);
}

// 초기상태
const initialState = {
    codeDetailList: [],    
    codeDetail: null,
    error: null,
};

// 리듀서 함수
const codeDetailReducer = handleActions(
    {
        [FETCH_LIST]: (state) => ({
            ...state,
            codeDetails: [],
        }),
        [FETCH_LIST_SUCCESS]: (state, { playload: data }) => ({
            ...state,
            codeDetails : data
        }),
        [FETCH_LIST_FAILURE] : (state, { playload: data }) => ({
            ...state,
            error: data,
        }),
        [FETCH_ONE]: (state) => ({
            ...state,
            codeDetail: null,
        }),
        [FETCH_ONE_SUCCESS]: (state, { playload: data }) => ({
            ...state,
            codeDetail : data
        }),
        [FETCH_ONE_FAILURE] : (state, { playload: data }) => ({
            ...state,
            error: data,
        }),
    },
    initialState
)

export default codeDetailReducer;
