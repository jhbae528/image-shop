import react from "react";
import { useParams } from "react-router-dom";
import CodeDetailModifyContainer from "../../containers/codedetail/CodeDetailModifyContainer";
import MainLayout from "../../layout/MainLayout";

function CodeDetailModifyPage() {

    const { groupCode, codeValue } = useParams();

    return (
        <MainLayout>
            <CodeDetailModifyContainer
                groupCode={groupCode}
                codeValue={codeValue}
            />
        </MainLayout>
    )
}

export default CodeDetailModifyPage;
