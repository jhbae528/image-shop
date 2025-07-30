import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchJobCodeList } from "../../lib/api";

function MemberModifyForm({
    member,
    isLoading,
    onModify,
}) {

    const [jobCodeList, setJobCodeList] = useState([]);
    const [userName, setUserName] = useState("");
    const [job, setJob] = useState("");
    const [auth1, setAuth1] = useState("");
    const [auth2, setAuth2] = useState("");
    const [auth3, setAuth3] = useState("");

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangeJob = (e) => {
        setJob(e.target.value);
    }

    const handleChangeAuth1 = (e) => {
        setAuth1(e.target.value);
    }

    const handleChangeAuth2 = (e) => {
        setAuth2(e.target.value);
    }

    const handleChangeAuth3 = (e) => {
        setAuth3(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userObject = {
            userId: member.userId,
            userPw: member.userPw,
            userName: userName,
            job: job,
            authList: [
                {
                    userNo: member.userNo,
                    auth: auth1,
                },
                {
                    userNo: member.userNo,
                    auth: auth2,
                },
                {
                    userNo: member.userNo,
                    auth: auth3,
                }
            ]
        };

        onModify(member.userNo, userObject);
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
        console.log("components/member/MemberModifyForm => useEffect -> getJobCodeList");
        getJobCodeList();
    }, []);

    useEffect(() => {
        console.log("components/member/MemberModifyForm => useEffect -> getJobCodeList");
        if(member){
            setUserName(member.userName);
            setJob(member.job);
            setAuth1(member.authList[0] && member.authList[0].auth);
            setAuth2(member.authList[1] && member.authList[1].auth);
            setAuth3(member.authList[2] && member.authList[2].auth);
        }

    }, [member]);

    return (
        <div align="center">
            <h2>회원 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && member && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>번호</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={member.userNo}
                                        disabled
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>아이디</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={member.userId}
                                        disabled
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>사용자명</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={member.userName}
                                        onChange={handleChangeUserName}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>직업</td>
                                <td>
                                    <select 
                                        value={member.job}
                                        onChange={handleChangeJob}
                                    >
                                        {jobCodeList.map((jobCode) => (
                                            <option 
                                                key={jobCode.value}
                                                value={jobCode.value}
                                            >
                                                {jobCode.label}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>권한-1</td>
                                <td>
                                    <select 
                                        value={auth1}
                                        onChange={handleChangeAuth1}
                                    >
                                        <option value="">=== 선택해주세요 ===</option>
                                        <option value="ROLE_USER">사용자</option>
                                        <option value="ROLE_MEMBER">회원</option>
                                        <option value="ROLE_ADMIN">관리자</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>권한-2</td>
                                <td>
                                    <select 
                                        value={auth2}
                                        onChange={handleChangeAuth2}
                                    >
                                        <option value="">=== 선택해주세요 ===</option>
                                        <option value="ROLE_USER">사용자</option>
                                        <option value="ROLE_MEMBER">회원</option>
                                        <option value="ROLE_ADMIN">관리자</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>권한-3</td>
                                <td>
                                    <select 
                                        value={auth3}
                                        onChange={handleChangeAuth3}
                                    >
                                        <option value="">=== 선택해주세요 ===</option>
                                        <option value="ROLE_USER">사용자</option>
                                        <option value="ROLE_MEMBER">회원</option>
                                        <option value="ROLE_ADMIN">관리자</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit">수정</button>
                        <Link to={`/member/read/${member.userNo}`}>취소</Link>
                    </div>
                </form>
            )}
        </div>
    )
}

export default MemberModifyForm;