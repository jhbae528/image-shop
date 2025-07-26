import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeDetailModifyForm from "../../components/codedetail/CodeDetailModifyForm";
import * as api from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { fetchOne, FETCH_ONE } from "../../modules/codedetail";

// 속성값으로 groupCode, codeValue 받음
const CodeDetailModifyContainer = ({ groupCode, codeValue }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { codeDetail, isLoading } = useSelector(({ codedetail, loading }) => ({
        codeDetail: codedetail.codeDetail,
        isLoading: loading[FETCH_ONE],
    }));

    const onModify = async(groupCode, codeValue, codeName) => {
        console.log("components/codegroup/CodeDetailModifyContainer => onModify");
        try {
            const response = await api.modifyCodeDetail(groupCode, codeValue, codeName);
            alert("수정이 완료되었습니다.");

            navigate(`/codedetail/read/${groupCode}/${codeValue}`);
        } catch(e) {
            if(e.response.status === 400) {
                alert("잘못된 요청입니다.");
            } else if(e.response.status === 401) {
                alert("로그인이 필요합니다.");
                navigate("/signin");
            } else if(e.response.status === 403) {
                alert("접근권한이 없습니다.");
                navigate(-1);
            } else {
                alert(e.response.data.message);
            }
        }
    };

    useEffect(() => {
        dispatch(fetchOne(groupCode, codeValue));
    }, [dispatch, groupCode, codeValue]);

    return (
        <CodeDetailModifyForm
            codeDetail={codeDetail}
            isLoading={isLoading}
            onMdify={onModify}
        />
    )
}

export default CodeDetailModifyContainer;