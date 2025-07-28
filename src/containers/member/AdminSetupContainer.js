import React from "react";
import AdminSetupForm from "../../components/member/AdminSetupForm";
import { useNavigate } from "react-router-dom";
import * as api from "../../lib/api";

const AdminSetupContainer = () =>{

    const navigate = useNavigate();

    const onRegister = async(userId, userName, userPw) => {
        try{
            const response = await api.adminSetup(userId, userName, userPw);
            alert("관리자가 등록되었습니다.");

            navigate("/");
        }catch(e){
            throw e;
        }
    };

    return <AdminSetupForm onRegister={onRegister} />
};

export default AdminSetupContainer; 