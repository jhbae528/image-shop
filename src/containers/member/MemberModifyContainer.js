import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MemberModifyForm from "../../components/member/MemberModifyForm";
import * as api from "../../lib/api";
import { fetchOne, FETCH_ONE } from "../../modules/member";

const MemberModifyContainer = ({userNo}) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { member, isLoading } = useSelector(({member, loading }) => ({
        member: member.member,
        isLoading: loading[FETCH_ONE]
    }));

    const onModify = async(userNo, payload) => {
        try {
            const response = await api.modifyMember(userNo, payload);

            alert("수정되었습니다.");

            navigate(`/member/read/${userNo}`);

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

    useEffect(() => {
        dispatch(fetchOne(userNo));
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