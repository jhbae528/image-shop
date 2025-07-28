import React, { useState , useEffect } from "react";
import { Link } from "react-router";
import { fetchJobCodeList } from "../../lib/api";

function MemberRegisterForm( onRegister ) {

    const [jobCodeList, setJobCodeList] = useState([]);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [job, setJob] = useState("");
    const [auth3, setAuth3] = useState("");

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

    const handleChangeAuth1 = (e) => {
        setAuth3(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onRegister(userId, password, userName, job, auth3);
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
        </div>
    )
}

export default MemberRegisterForm;