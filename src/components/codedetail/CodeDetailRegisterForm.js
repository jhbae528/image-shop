import React, { useState, useCallback } from "react";
import { Link } from "react-router";

function CodeDetailRegisterForm({ onRegisger }) {

    const [groupCode, setGroupCode] = useState("A01");
    const [codeName, setCodeName] = useState("");

    const handleChangeGroupCode = useCallback((e) => {

    }, []);

    const handleChangeCodeValue = useCallback((e) => {

    }, []);

    const handleChangeCodeName = useCallback((e) => {

    }, []);

    const handleSubmit = useCallback(

    );

    const getGroupCodeList = async () => {

    };

    // 마운트될때 그룹코드 목록 가져옴
    // useEffect(() => {

    // }, []);

    return (
        <div align="center">
            <h2>코드 등록</h2>
            
        </div>
    );
}

export default CodeDetailRegisterForm;