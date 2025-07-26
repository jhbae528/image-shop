import React, {useState, useEffect} from "react";
import { Link } from "react-router";
import { fetchGroupCodeList } from "../../lib/api";

function CodeDetailRead({
    codeDetail,
    isLoading,
    groupCode,
    codeValue,
    onRemove
}) {
    
    const [groupCodeList, setGroupCodeList] = useState([]);

    // 코드그룹 목록 가져옴
    const getGroupCodeList = async () => {
        try {
            const response = await fetchGroupCodeList();
            setGroupCodeList(response.data);
        }catch(e){
            throw e;
        }
    };

    // 마운트 될 때 그룹코드 목록 가져오기
    useEffect(() => {
        console.log("components/codedetail/CodeDetailRead => useEffect -> getGroupCodeList");
        getGroupCodeList();
    }, []);

    return (
        <div align="center">
            <h2>코드 상세보기</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeDetail && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>그룹코드</td>
                                <td>
                                    <select value={codeDetail.groupCode} readOnly>
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
                                        value={codeDetail.codeValue}
                                        readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>코드명</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={codeDetail.codeName}
                                        readOnly />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={`/codedetail/edit/${groupCode}/${codeValue}`}>편집</Link>
                    <button onClick={onRemove}>삭제</button>
                    <Link to="/codedetail">목록</Link>
                </>
            )}
        </div>
    );
}

export default CodeDetailRead;