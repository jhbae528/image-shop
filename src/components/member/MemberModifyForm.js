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
    const [auth3, setAuth3] = useState("");

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangeJob = (e) => {
        setJob(e.target.value);
    }

    const handleChangeAuth1 = (e) => {
        setAuth3(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onModify(userName, job, auth3);
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
            //setAuth3(member.)
        }

    }, [member]);

    return (
        <div align="center">
            <h2>회원 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && member && (
                <></>
            )}
        </div>
    )
}

export default MemberModifyForm;