import React from "react";
import { connect, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import MainHeader from "../../components/common/MainHeader";
import { getAuthorized } from "../../modules/selector";
import { setAccessToken, setMyInfo } from "../../modules/auth";
import client from "../../lib/client";
import Cookies from "js-cookie";

// 로그인여부의 로그인한 사용자 정보 속성값으로 수신
const MainHeaderContainer = ({ isAuthorized, myInfo }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onLogout = () => {
        delete client.defaults.headers.common.Authorization;

        Cookies.remove("accessToken");

        dispatch(setAccessToken(""));
        dispatch(setMyInfo(null));

        navigate("/");
    }

    return (
        <MainHeader
            myInfo={myInfo}
            isAuthorized={isAuthorized}
            onLogout={onLogout}
        />
    );
};

// 스토어 상태를 가공한 정보를 컴포넌트 속성으로 전달
export default connect((state) => {
    return {
        isAuthorized: getAuthorized(state),
        myInfo: state.auth.myInfo,
    }
})(MainHeaderContainer);