import React from "react";
import { connect } from "react-redux";
import MainHeader from "../../components/common/MainHeader";
import { getAuthorized } from "../../modules/selector";

// 로그인여부의 로그인한 사용자 정보 속성값으로 수신
const MainHeaderContainer = ({ isAuthorized, myInfo }) => {
    return (
        <MainHeader
            myInfo={myInfo}
            isAuthorized={isAuthorized}
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