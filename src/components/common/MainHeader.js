import React from "react";
import { Link } from "react-router-dom";

function MainHeader({ isAuthorized, myInfo, onLogout }) {
    return (
        <div align="right">
            {isAuthorized && myInfo && (
                <div>
                    <span>{myInfo.userName}님 환영합니다.</span>
                    <button onClick={onLogout}>로그아웃</button>
                </div>
            )}
            {!isAuthorized && !myInfo &&
                <Link to="/signin">로그인</Link>
            }
            
        </div>
    );
}

export default MainHeader;