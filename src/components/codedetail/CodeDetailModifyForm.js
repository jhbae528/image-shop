import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function CodeDetailModifyForm ({
    codeDetail,
    isLoading,
    onMdify,
}) {
    const [groupCodes, setGroupCodes] = useState([]);
    const [codeName, setCodeName] = useState("");

    const handleChangeCodeName = (e) => {

    };

    const handleSubmit = (e) => {

    };

    // 그룹코드 목록 가져옴
    const getGroupCodeList = async () => {

    };

    // 마운트될때 그룹코드 목록 가져옴
    useEffect(() => {

    }, []);

    return (
        <div align="center">
            <h2>코드 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && codeDetail && (
                <></>
            )}
        </div>
    );
}

export default CodeDetailModifyForm;