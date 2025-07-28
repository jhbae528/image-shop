import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/auth/SignInForm";
import { login, checkMyInfo } from "../../modules/auth";

const SignInContainer = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    console.log("SignInContainer");

    // 스토어 상태 조회
    const { accessToken, myInfo } = useSelector(({ auth }) => ({
        accessToken: auth.accessToken,
        myInfo: auth.myInfo,
    }));

    // 로그인 처리
    const onSignIn = (userId, password) => {
        console.log("container/auth/SignInContainer => onSignIn");
        try {
            dispatch(login({ userId, password }));
        }
        catch(e){
            console.log(e);
        }
    };

    // 마운트될때 액세스토큰 상태 정보 확인
    useEffect(() => {
        console.log("container/auth/SignInContainer => useEffect : before accessToken");
        if (accessToken) {
            console.log("container/auth/SignInContainer => useEffect -> accessToken");
            dispatch(checkMyInfo());
        }
    }, [accessToken, dispatch]);

    useEffect(() => {
        console.log("container/auth/SignInContainer => useEffect : before myInfo");
        if(myInfo){
            console.log("container/auth/SignInContainer => useEffect : myInfo");
            alert("로그인 되었습니다.");
            navigate("/");
        }
    }, [myInfo]);

    return <SignInForm onSignIn={onSignIn} />
};

export default SignInContainer;