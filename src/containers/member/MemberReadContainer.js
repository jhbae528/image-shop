import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MemberRead from "../../components/member/MemberRead";
import * as api from "../../lib/api";
import { fetchOne, FETCH_ONE } from "../../modules/member";

const MemberReadContainer = ({ userNo }) => {

    const dispatch = useDispatch();

    const { member, isLoading } = useSelector(({ member, loading }) => ({

    }));

    useEffect(() => {

    }, [dispatch, userNo]);

    const onRemove = async () => {

    };

    return (
        <MemberRead
            member={member}
            isLoading={isLoading}
            userNo={userNo}
            onRemove={onRemove}
        />
    )
};



export default MemberReadContainer;