import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeDetailRegisterForm from "../../components/codedetail/CodeDetailRegisterForm";
import { useNavigate } from "react-router-dom";
import * as api from "../../lib/api";

const CodeDetailRegisterContainer = ({ groupCode, codeValue, codeName }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onRegister = async(groupCode, codeValue, codeName) => {

    };

    return <CodeDetailRegisterForm
                onRegisger={onRegister}
            />
}

export default CodeDetailRegisterContainer;
