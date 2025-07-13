import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CodeGroupRegisterContainer from "../../containers/codegroup/CodeGroupRegisterContainer";
import MainLayout from "../../layout/MainLayout";

function CodeGroupRegisterPage() {

    return (
        <MainLayout>
            <CodeGroupRegisterContainer 
            />
        </MainLayout>
    );
}

export default CodeGroupRegisterPage;