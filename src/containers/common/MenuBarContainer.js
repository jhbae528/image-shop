import React from "react";
import { connect } from "react-redux";
import MenuBar from "../../components/common/MenuBar";
import { getAuthorized, isAdmin } from "../../modules/selector";

// 사용자 권한을 속성으로 수신
const MenuBarContainer = ({ isAuthorized, isAdmin }) => {
    return (
        <MenuBar
            isAuthorized={isAuthorized}
            isAdmin={isAdmin}
        />
    );
};

export default connect((state) => {
    return {
        isAuthorized: getAuthorized(state),
        isAdmin: isAdmin(state),
    }
})(MenuBarContainer);
