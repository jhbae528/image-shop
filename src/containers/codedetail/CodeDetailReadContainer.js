import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CodeDetailRead from "../../components/codedetail/CodeDetailRead"
import { fetchOne, FETCH_ONE } from "../../modules/codedetail";
import * as api from "../../lib/api";

// 속성값으로 groupCode, codeValue 전달받음
const CodeDetailReadContainer = ({ groupCode, codeValue }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { codeDetail, isLoading } = useSelector(({ codedetail, loading }) => ({
        codeDetail: codedetail.codeDetail,
        isLoading: loading[FETCH_ONE],
    }));

    useEffect(() => {
        console.log("container/codedetail/CodeDetailReadContainer => useEffect -> dispatch -> fetchOne");
        dispatch(fetchOne(groupCode, codeValue));
    }, [dispatch, groupCode, codeValue]);

    const onRemove = async() => {
        console.log("container/codedetail/CodeDetailReadContainer => onRemove");
        try{
            const response = await api.removeCodeDetail(groupCode, codeValue);
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
        <CodeDetailRead
            codeDetail={codeDetail}
            isLoading={isLoading}
            groupCode={groupCode}
            codeValue={codeValue}
            onRemove={onRemove}
        />
    );
}

export default CodeDetailReadContainer;
