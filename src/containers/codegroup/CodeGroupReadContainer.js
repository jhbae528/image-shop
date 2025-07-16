import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import CodeGroupRead from "../../components/codegroup/CodeGroupRead";
import { readOne, READ_ONE } from "../../modules/codegroup";
import * as api from "../../lib/api";

const CodeGroupReadContainer = ({ groupCode }) => {

    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const { codeGroup, isLoading } = useSelector(({ codegroup, loading }) => ({
        codeGroup: codegroup.codeGroup,
        isLoading: loading[READ_ONE],
    }));

    useEffect(() => {
        dispatch(readOne(groupCode));
    }, [dispatch, groupCode]);
    
    const onRemove = async() => {
        try{
            const response = await api.removeCodeGroup(groupCode);
            alert("삭제되었습니다.");

            navigate("/codegroup");
        } catch (e) {
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

    return (
        <CodeGroupRead
            codeGroup={codeGroup}
            isLoading={isLoading}
            groupCode={groupCode}
            onRemove={onRemove}
        />
    );
};

export default CodeGroupReadContainer;