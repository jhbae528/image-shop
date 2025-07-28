import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/auth/SignUpForm";
import * as api from "../../lib/api";

const SignUpContainer = () => {

    const navigator = useNavigate();

    const onSignUp = async(userId, password, userName, job) => {
        console.log("container/auth/SignUpContainer => onSignUp");

        try {
            const response = await api.signUp(userId, password, userName, job);
            alert("회원가입이 완료되었습니다.");

            navigator("/signin");
        }
        catch(e){
            if(e.response.status === 400){
                alert("잘못된 요청입니다.");
            }
            else {
                alert(e.response.data.message);
            }
        }
    };

    return <SignUpForm onSignUp={onSignUp}/>          

}

export default SignUpContainer;