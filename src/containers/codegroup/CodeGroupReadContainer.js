import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import CodeGroupRead from "../../components/codegroup/CodeGroupRead";
import { readOne, READ_ONE } from "../../modules/codegroup";
import * as api from "../../lib/api";

const CodeGroupReadContainer = ({ groupCode }) => {

    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const { codeGroup, isLoading } = useSelector(({ codegroup, loading }) => {

    });

    useEffect(() => {

    }, [dispatch, groupCode]);
    
    const onRemove = async() => {

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