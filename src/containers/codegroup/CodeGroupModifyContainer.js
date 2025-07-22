import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeGroupModifyForm from "../../components/codegroup/CodeGroupModifyForm";
import { fetchOne, FETCH_ONE } from "../../modules/codegroup";
import { useNavigate } from "react-router-dom";
import * as api from "../../lib/api";

const CodeGroupModifyContainer = ({ groupCode }) => {

    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const { codeGroup, isLoading } = useSelector(({ codegroup, loading }) => ({
        codeGroup: codegroup.codeGroup,
        isLoading : loading[FETCH_ONE],
    }));

    const onModify = async(groupCode, groupName) => {
        try{
            const response = await api.modifyCodeGroup(groupCode, groupName);
            alert("수정이 완료되었습니다.");

            navigate("/codegroup/read/" + response.data.groupCode);
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
        dispatch(fetchOne(groupCode));
    }, [dispatch, groupCode]);

    return (
        <CodeGroupModifyForm
            codeGroup={codeGroup}
            isLoading={isLoading}
            onModify={onModify}
        />
    )
};

export default CodeGroupModifyContainer;