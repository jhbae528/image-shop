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
        setGroupName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onModify(codeGroup.groupCode, groupName);
    };

    // 마운트될때 기존의 코드그룹명을 가져옴
    useEffect(() => {
        console.log("components/codegroup/CodeGroupModifyForm => useEffect -> setGroupName");
        if(codeGroup) {
            setGroupName(codeGroup.groupName);
        }
    }, [codeGroup]);

    return (
        <div align="center">
            <h2>코드그룹 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeGroup && (
                <>
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>코드그룹코드</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            value={codeGroup.groupCode} 
                                            disabled 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>코드그룹명</td>
                                    <td>
                                        <input 
                                            type="text"
                                            value={groupName}
                                            onChange={handleChangeGroupName}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button type="submit">수정</button>
                            <Link to={`/codegroup/read/${codeGroup.groupCode}`}>취소</Link>
                        </div>
                    </form>
                </>
            )}
        </div>
    )
}

export default CodeGroupModifyForm;