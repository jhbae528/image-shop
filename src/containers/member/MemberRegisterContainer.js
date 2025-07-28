import React from "react";
import * as api from "../../lib/api";
import MemberRegisterForm from "../../components/member/MemberRegisterForm";

const MemberRegisterContainer = () => {

    const onRegister = async(userId, userName, userPw, job) => {

    };

    return <MemberRegisterForm onRegister={onRegister} />
};

export default MemberRegisterContainer;