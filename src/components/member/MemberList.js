import React from "react";
import { Link } from "react-router";

function MemberList({ memberList, isLoading }) {
    return (
        <div align="center">
            <h2>회원 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && memberList && (
                <></>
            )}
        </div>
    );
}

export default MemberList;