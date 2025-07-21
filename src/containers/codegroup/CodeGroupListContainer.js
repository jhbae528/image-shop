import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeGroupList from "../../components/codegroup/CodeGroupList";
import { fetchList, FETCH_LIST } from "../../modules/codegroup";

const CodeGroupListContainer = () => {

    const dispatch = useDispatch();

    const { codeGroupList, isLoading } = useSelector(({ codegroup, loading }) => ({
        codeGroupList: codegroup.codeGroupList,
        isLoading: loading[FETCH_LIST],
    }));

    useEffect(() => {
        dispatch(fetchList());
    }, [dispatch]);

    return <CodeGroupList 
                codeGroupList={codeGroupList}
                isLoading={isLoading} 
            />
};

export default CodeGroupListContainer;
