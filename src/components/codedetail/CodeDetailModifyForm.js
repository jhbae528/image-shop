import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { fetchGroupCodeList } from "../../lib/api";

function CodeDetailModifyForm ({
    codeDetail,
    isLoading,
    onMdify,
}) {
    const [groupCodeList, setGroupCodeList] = useState([]);
    const [codeValue, setCodeValue] = useState("");
    const [codeName, setCodeName] = useState("");

    const handleChangeCodeName = (e) => {
        setCodeName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onMdify(codeDetail.groupCode, codeValue, codeName);
    };

    // 그룹코드 목록 가져옴
    const getGroupCodeList = async () => {
        try {
            const response = await fetchGroupCodeList();
            setGroupCodeList(response.data);
        }catch(e){
            throw e;
        }
    };

    // 마운트될때 그룹코드 목록 가져옴
    useEffect(() => {
        console.log("components/codedetail/CodeDetailModifyForm => useEffect -> getGroupCodeList");
        getGroupCodeList();
    }, []);

    useEffect(() => {
        console.log("components/codedetail/CodeDetailModifyForm => useEffect -> setCodeValue / setCodeName");
        if(codeDetail) {
            setCodeValue(codeDetail.codeValue);
            setCodeName(codeDetail.codeName);
        }
    }, [codeDetail]);

    return (
        <div align="center">
            <h2>코드 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeDetail && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>그룹코드</td>
                                <td>
                                    <select value={codeDetail.groupCode} disabled>
                                        {groupCodeList.map((groupCode) => (
                                            <option
                                                key={groupCode.value}
                                                value={groupCode.value}>
                                                {groupCode.label}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>코드값</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={codeValue}
                                        disabled/>
                                </td>
                            </tr>
                            <tr>
                                <td>코드명</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={codeName}
                                        onChange={handleChangeCodeName} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/codedetail/read/${codeDetail.groupCode}/${codeDetail.codeValue}`}>취소</Link>
                    </div>
                </form>
            )}
        </div>
    );
}

export default CodeDetailModifyForm;