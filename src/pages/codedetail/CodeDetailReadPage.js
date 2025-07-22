import react from "react";
import { useParams } from "react-router";
import CodeDetailReadContainer from "../../containers/codedetail/CodeDetailReadContainer";
import MainLayout from "../../layout/MainLayout";

function CodeDetailReadPage() {
    
    const { groupCode, codeValue } = useParams();

    return (
        <MainLayout>
            <CodeDetailReadContainer
                groupCode={groupCode}
                codeValue={codeValue}
            />
        </MainLayout>
    )
}

export default CodeDetailReadPage;