import React from "react";
import { useParams } from "react-router-dom";
import MemberModifyContainer from "../../containers/member/MemberModifyContainer";
import MainLayout from "../../layout/MainLayout";


function MemberModifyPage() {

    const { userNo } = useParams();

    return (
        <MainLayout>
            <MemberModifyContainer userNo={userNo}/>
        </MainLayout>
    )
}

export default MemberModifyPage;