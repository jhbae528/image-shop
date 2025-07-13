import React, { useState, useCallback } from "react";
import { Link } from "react-router";

function CodeGroupRegisterForm({ onRegister }) {
    
    const [groupCode, setGroupCode] = useState("");
    const [groupName, setGroupName] = useState("");

    const handleChangeGroupCode = useCallback((e) => {
        setGroupCode(e.target.value);
    }, []);

    const handleChangeGroupName = useCallback((e) => {
        setGroupName(e.target.value);
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            onRegister(groupCode, groupName);
        },
        [groupCode, groupName, onRegister]
    );

    return (
        <div align="center">
            <h2>코드그룹 등록</h2>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>그룹코드</td>
                            <td>
                                <input 
                                    type="text"
                                    value={groupCode}
                                    onChange={handleChangeGroupCode}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>그룹명</td>
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
                    <button type="submit">등록</button>
                    <Link to="/codegroup">취소</Link>
                </div>
            </form>
        </div>
    );
}

export default CodeGroupRegisterForm;