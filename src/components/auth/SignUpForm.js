import React, { useState, useCallback, useEffect} from "react";
import { Link } from "react-router-dom";
import { fetchCodeGroupList, fetchJobCodeList } from "../../lib/api";

// 등록 처리 함수를 컴포넌트 속성으로 전달
function SignUpForm({ onSignUp }) {

    const [jobCodeList, setJobCodeList] = useState([]);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [job, setJob] = useState("");

    const handleChangeUserId = useCallback((e) => {
        setUserId(e.target.value);
    }, []);

    const handleChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const handleChangeUserName = useCallback((e) => {
        setUserName(e.target.value);
    }, []);

    const handleChangeJob = useCallback((e) => {
        setJob(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        onSignUp(userId, password, userName, job);
    }, [userId, password, userName, job, onSignUp]);

    const getJobCodeList = async() => {
        try {
            const response = await fetchJobCodeList();
            setJobCodeList(response.data);
        } catch(e) {
            throw e;
        }
    };

    useEffect(() =>{
        console.log("components/auth/SignUpForm => useEffect -> getJobCodeList");
        getJobCodeList();
    }, []);

    return (
        <div align="center">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td>
                                <input
                                    type="text"
                                    value={userId}
                                    onChange={handleChangeUserId}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handleChangePassword}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>사용자명</td>
                            <td>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={handleChangeUserName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>직업</td>
                            <td>
                                <select
                                    value={job} 
                                    onChange={handleChangeJob}>
                                        {jobCodeList.map((jobCode) => (
                                            <option
                                                key={jobCode.value}
                                                value={jobCode.value}>
                                                    {jobCode.label}
                                                </option>
                                        ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <button type="submit">회원가입</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <p>
                <Link to="/signin">로그인</Link>
            </p>
        </div>
    );

}

export default SignUpForm;

