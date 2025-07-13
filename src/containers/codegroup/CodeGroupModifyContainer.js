import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeGroupModifyForm from "../../components/codegroup/CodeGroupModifyForm";
import { readOne, READ_ONE } from "../../modules/codegroup";
import { useParams, useNavigate } from "react-router-dom";
import * as api from "../../lib/api";

const CodeGroupModifyContainer = ({ groupCode }) => {

    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const { codeGroup, isLoading } = useSelector(({ codegroup, loading }) => {

    });

    const onModify = async(groupCode, groupName) => {

    };

    useEffect(() => {

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