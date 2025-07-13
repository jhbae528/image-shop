import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeGroupList from "../../components/codegroup/CodeGroupList";
import { readList, READ_LIST } from "../../modules/codegroup";

const CodeGroupListContainer = () => {

    const dispatch = useDispatch();

    const { codeGroupList, isLoading } = useSelector(({ codegroup, loading }) => ({
        codeGroupList: codegroup.codeGroups,
        isLoading: loading[READ_LIST],
    }));

    useEffect(() => {
        dispatch(readList());
    }, [dispatch]);

    return <CodeGroupList codeGroupList={codeGroupList} isLoading={isLoading} />
};

export default CodeGroupListContainer;
