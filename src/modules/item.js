//컨테이너 액션 디스패처 -> 액션 -> 리듀서
import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { endLoading, startLoading } from "./loading";
import { readItemApi } from "../lib/api";

// 액션타입
const READ_ITEM_LIST_SUCCESS = "item/READ_ITEM_LIST_SUCCESS";
const READ_ITEM_LIST_FAILURE = "item/READ_ITEM_LIST_FAILURE";
const READ_ITEM_SUCCESS = "item/READ_ITEM_SUCCESS";
const READ_ITEM_FAILURE = "item/READ_ITEM_FAILURE";
const CHANGE_BOARD_TITLE = "item/CHANGE_BOARD_TITLE";
const CHANGE_BOARD_CONTENT = "item/CHANGE_BOARD_CONTENT";

export const READ_ITEM_LIST = "item/READ_ITEM_LIST";
export const READ_ITEM = "item/READ_ITEM";
export const MODIFY_ITEM = "item/MODIFY_ITEM";

// 액션
export const readItemListSuccess = createAction(READ_ITEM_LIST_SUCCESS, (data) => data);
export const readItemListFailure = createAction(READ_ITEM_LIST_FAILURE, (e) => e);
export const readItem = createAction(READ_ITEM, (itemId) => itemId);
export const readItemSuccess = createAction(READ_ITEM_SUCCESS, (data) => data);
export const readItemFailure = createAction(READ_ITEM_FAILURE, (e) => e);
export const changeBoardTitle = createAction(CHANGE_BOARD_TITLE, (title) => title);
export const changeBoardContent = createAction(CHANGE_BOARD_CONTENT, (content) => content);

export function* itemSaga() {
    // 상세 조회 태스크 수행
    yield(takeLatest(READ_ITEM, readItemSaga));
}

function* readItemSaga(action) {
    yield put(startLoading(READ_ITEM));
    try{
        const response = yield call(readItemApi, action.payload);
        yield put(readItemSuccess(response.data));
    } catch(e) {
        yield put(readItemFailure(e));
    }
    yield put(endLoading(READ_ITEM));
}

const initialState = {
    items: [],
    item: null,
    error: null,
}

// 리듀서
const itemReducer = handleActions(
    {
        [READ_ITEM_LIST_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            items: data,
        }),
        [READ_ITEM_LIST_FAILURE]: (state, {payload: err }) => ({
            ...state,
            error: err,
        }),
        [READ_ITEM_SUCCESS]: (state, { payload: data }) => ({
            ...state,
            item: data,
        }),
        [READ_ITEM_FAILURE]: (state, {payload: err }) => ({
            ...state,
            error: err,
        }),
        [CHANGE_BOARD_TITLE]: (state, { payload: title }) => ({
            ...state,
            item: {
                ...state.item,
                title,
            },
        }),
        [CHANGE_BOARD_CONTENT]: (state, { payload: content }) => ({
            ...state,
            item: {
                ...state.item,
                content,
            },
        }),
    },
    initialState
);

export default itemReducer;