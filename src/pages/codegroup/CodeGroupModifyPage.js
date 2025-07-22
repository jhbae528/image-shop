import react from "react";
import { useParams } from "react-router-dom";
import CodeGroupModifyContainer from "../../containers/codegroup/CodeGroupModifyContainer";
import MainLayout from "../../layout/MainLayout";

function CodeGroupModifyPage() {

    const { groupCode } = useParams();

    return (
        <MainLayout>
            <CodeGroupModifyContainer
                groupCode={groupCode}
            />
        </MainLayout>
    );
}

export default CodeGroupModifyPage;