import React from "react";
import { Link } from "react-router";

// 부모 컴포넌트에서 속성으로 수신
function CodeGroupList({ codeGroupList, isLoading }) {
    // 코드그룹 목록 화면 표시
    return (
        <div align="center">
            <h2>코드그룹 목록</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeGroupList && (
                <>
                    <Link to="/codegroup/create">새로만들기</Link>
                    <table border="1">
                        <thead>
                            <tr>
                                <th align="center" width="160">코드그룹코드</th>
                                <th align="center" width="160">코드그룹명</th>
                                <th align="center" width="160">등록일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!codeGroupList.length && (
                                <tr>
                                    <td colSpan="3">
                                        List is empty
                                    </td>
                                </tr>
                            )}
                            {!!codeGroupList.length && codeGroupList.map((codeGroup) => (
                                <tr key={codeGroup.groupCode}>
                                    <td align="center">{codeGroup.groupCode}</td>
                                    <td align="left">
                                        <Link to={`/codegroup/read/${codeGroup.groupCode}`}>
                                            {codeGroup.groupName}
                                        </Link>
                                    </td>
                                    <td align="center">{codeGroup.regDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default CodeGroupList;