import React from "react";
import { useParams } from "react-router-dom";
import MemberRegisterContainer from "../../containers/member/MemberRegisterContainer";
import MainLayout from "../../layout/MainLayout";


function MemberRegisterPage() {

    const { userNo } = useParams();

    return (
        <MainLayout>
            <MemberRegisterContainer />
        </MainLayout>
    )
}

export default MemberRegisterPage;