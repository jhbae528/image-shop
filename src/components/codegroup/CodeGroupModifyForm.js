import React, { useState, useEffect } from "react";
import { Link } from "react-router";

// 부모 컴포넌트에서 속성으로 수신
function CodeGroupModifyForm({
    codeGroup,
    isLoading,
    onModify,
}) {
    // 컴포넌트 상태 설정
    const [groupName, setGroupName] = useState("");

    // 코드그룹명 값의 변경을 처리하는 함수
    const handleChangeGroupName = (e) => {

    };

    const handleSubmit = (e) => {

    };

    // 마운트될때 기존의 코드그룹면을 가져옴
    useEffect(() => {

    }, [codeGroup]);

    return (
        <div align="center">
            <h2>코드그룹 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeGroup && (
                <>
                </>
            )}
        </div>
    )
}

export default CodeGroupModifyForm;