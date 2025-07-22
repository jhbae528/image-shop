import React from "react";
import { Link } from "react-router";

function CodeDetailRead({
    codeDetail,
    isLoading,
    groupCode,
    codeValue,
    onRemove
}) {
//    const [groupCodes, setGroupCodes] = useState([]);

    // // 코드그룹 목록 가져옴
    // const getGroupCodeList = async () => {

    // };

    // // 마운트 될 때 그룹코드 목록 가져오
    // useEffect(() => {

    // }, []);

    return (
        <div align="center">
            <h2>코드 상세보기</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeDetail && (
                <>
                </>
            )}
        </div>
    );
}

export default CodeDetailRead;