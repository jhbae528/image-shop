import { createSelector } from "reselect";

// 액세스토큰 전달 선택자 함수
const getAccessToken = (state) => state.auth.accessToken;

// 사용자정보 전달 선택자 함수
const getMyInfo = (state) => state.auth.myInfo;

// 로그인여부 선택자 함수
export const getAuthorized = createSelector(
    [getAccessToken, getMyInfo],
    (accessToken, myInfo) => accessToken.length > 0 && !!myInfo
);

// 관리자여부 선택자 함수
export const isAdmin = createSelector(
    [getAuthorized, getMyInfo],
    (isAuthorized, myInfo) =>
        isAuthorized && myInfo.authList[0].auth === "ROLE_ADMIN"
);

// 회원여부 선택자 함수
export const isMember = createSelector(
    [getAuthorized, getMyInfo],
    (isAuthorized, myInfo) =>
        isAuthorized && myInfo.authList[0].auth === "ROLE_MEMBER"
);