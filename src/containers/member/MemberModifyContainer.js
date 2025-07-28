import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MemberModifyForm from "../../components/member/MemberModifyForm";
import * as api from "../../lib/api";
import { fetchOne, FETCH_ONE } from "../../modules/member";

const MemberModifyContainer = ({userNo}) => {

    const dispatch = useDispatch();

    const { member, isLoading } = useSelector(({member, loading }) => ({

    }));

    const onModify = async(userNo, payload) => {
        
    };

    useEffect(() => {

    }, [dispatch, userNo]);

    return (
        <MemberModifyForm
            member={member}
            isLoading={isLoading}
            onModify={onModify}
        />
    )
};

export default MemberModifyContainer;