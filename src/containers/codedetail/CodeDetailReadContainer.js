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
        console.log("container/codedetail/CodeDetailReadContainer.useEffect => fetchOne");
        dispatch(fetchOne(groupCode, codeValue));
    }, [dispatch, groupCode, codeValue]);

    const onRemove = async() => {

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
