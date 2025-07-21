import React from "react";
import { Link } from "react-router";

// 부모 컴포넌트에서 컴포넌트 속성으로 수신
function CodeDetailList({ codeDetailList, isLoading }) {
    // 코드 목록 화면 표시
    return (
        <div align="center">
            <h2>코드 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeDetailList && (
                <>
                </>
            )}
        </div>
    );
}

export default CodeDetailList;