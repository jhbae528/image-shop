import React, { useState , useEffect } from "react";
import { Link } from "react-router";
import { fetchJobCodeList } from "../../lib/api";

function MemberRegisterForm( {onRegister} ) {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [job, setJob] = useState("");
    //const [auth3, setAuth3] = useState("");
    const [jobCodeList, setJobCodeList] = useState([]);

    const handleChangeUserId = (e) => {
        setUserId(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangeJob = (e) => {
        setJob(e.target.value);
    }

    // const handleChangeAuth1 = (e) => {
    //     setAuth3(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        onRegister(userId, password, userName, job);
    }

    const getJobCodeList = async () => {
        try {
            const response = await fetchJobCodeList();
            setJobCodeList(response.data);
        } catch(e) {
            throw e;
        }
    }

    useEffect(() => {
        console.log("components/member/MemberRegisterForm => useEffect -> getJobCodeList");
        getJobCodeList();
    }, []);

    return (
        <div align="center">
            <h2>회원등록</h2>

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
                                    type="text"
                                    value={userId}
                                    onChange={handleChangePassword}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>사용자명</td>
                            <td>
                                <input
                                    type="text"
                                    value={userId}
                                    onChange={handleChangeUserName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>직업</td>
                            <td>
                                <select
                                    value={job}
                                    onChange={handleChangeJob}
                                >
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
                    </tbody>
                </table>

                <div>
                    <button type="submit">등록</button>
                    <Link to="/member">취소</Link>
                </div>

            </form>
        </div>
    );
}

export default MemberRegisterForm;