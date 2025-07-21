import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeDetailList from "../../components/codedetail/CdoeDetailList";
import { fetchList, FETCH_LIST } from "../../modules/codedetail";

const CodeDetailListContainer = () => {
    const dispatch = useDispatch();

    const { codeDetailList, isLoading } = useSelector(({ codedetail, loading }) => ({
        codeDetailList: codedetail.codeDetailList,
        isLoading: loading[FETCH_LIST],
    }));

    // 마운트 될때 코드 목록 가져옴
    useEffect(() => {

    }, [dispatch]);

    return <CodeDetailList
                codeDetailList={codeDetailList}
                isLoading={isLoading}
            />
}

export default CodeDetailListContainer;

