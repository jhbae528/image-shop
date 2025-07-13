import React from "react";
import { Link } from "react-router";

function CodeGroupRead({
    codeGroup,
    isLoading,
    groupCode,
    onRemove
}) {
    return (
        <div align="center">
            <h2>코드그룹 상세보기</h2>
            {isLoading && "로딩중"}
            {!isLoading && codeGroup && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>코드그룹코드</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={codeGroup.groupCode}
                                        readOnly
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>코드그룹명</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={codeGroup.groupName}
                                        readOnly
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={`/codegroup/edit/${codeGroup.groupCode}`}>
                        {codeGroup.groupName}
                    </Link>
                </>
            )}
        </div>
    )
}

export default CodeGroupRead;