import React from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../lib/api";
import MemberRegisterForm from "../../components/member/MemberRegisterForm";

const MemberRegisterContainer = () => {

    const navigate = useNavigate();

    const onRegister = async(userId, password, userName, job) => {
        try {
            const response = await api.registerMember(userId, password, userName, job);

            alert("등록되었습니다.");

            const userNo = response.data.userNo;

            navigate(`/member/read/${userNo}`);

        } catch (e) {
            if(e.response.status === 400) {
                alert("잘못된 요청입니다.");
            } else if(e.response.status === 401) {
                alert("로그인이 필요합니다.");
                navigate("/signin");
            } else if(e.response.status === 403) {
                alert("접근권한이 없습니다.");
                navigate(-1);
            } else {
                alert(e.response.data.message);
            }
        }
    };

    return <MemberRegisterForm onRegister={onRegister} />
};

export default MemberRegisterContainer;