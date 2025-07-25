import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router";
import { fetchGroupCodeList } from "../../lib/api";

function CodeDetailRegisterForm({ onRegisger }) {

    const [groupCode, setGroupCode] = useState("");
    const [groupCodeList, setGroupCodeList] = useState([]);
    const [codeValue, setCodeValue] = useState("");
    const [codeName, setCodeName] = useState("");

    const handleChangeGroupCode = useCallback((e) => {
        setGroupCode(e.target.value);
    }, []);

    const handleChangeCodeValue = useCallback((e) => {
        setCodeValue(e.target.value);
    }, []);

    const handleChangeCodeName = useCallback((e) => {
        setCodeName(e.target.value);
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            onRegisger(groupCode, codeValue, codeName);
        },
        [groupCode, codeValue, codeName, onRegisger]
    );

    const getGroupCodeList = async () => {
        try {
            const response = await fetchGroupCodeList();
            setGroupCodeList(response.data);
        }catch(e){
            throw e;
        }
    };

    useEffect(() => {
        console.log("components/codedetail/CodeDetailRegisterForm.useEffect => getGroupCodeList");
        getGroupCodeList();
    }, []);

    useEffect(() => {
        if(groupCodeList.length > 0) {
            console.log("components/codedetail/CodeDetailRegisterForm.useEffect => setGroupCode = " + groupCodeList[0].value);
            setGroupCode(groupCodeList[0].value);
        }
    }, [groupCodeList]);

    return (
        <div align="center">
            <h2>코드 등록</h2>
            
            <form onSubmit={handleSubmit}>

                <table>
                    <tbody>
                        <tr>
                            <td>그룹코드</td>
                            <td>
                                <select 
                                    value={groupCode}
                                    onChange={handleChangeGroupCode}>
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
                                    onChange={handleChangeCodeValue}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>코드명</td>
                            <td>
                                <input
                                    type="text"
                                    value={codeName}
                                    onChange={handleChangeCodeName}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit">등록</button>
                    <Link to="/codedetail">취소</Link>
                </div>
            </form>
            
            
        </div>
    );
}

export default CodeDetailRegisterForm;