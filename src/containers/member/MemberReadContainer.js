import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MemberRead from "../../components/member/MemberRead";
import * as api from "../../lib/api";
import { fetchOne, FETCH_ONE } from "../../modules/member";

const MemberReadContainer = ({ userNo }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { member, isLoading } = useSelector(({ member, loading }) => ({
        member : member.member,
        isLoading : loading[FETCH_ONE]
    }));

    useEffect(() => {
        dispatch(fetchOne(userNo));
    }, [dispatch, userNo]);

    const onRemove = async () => {
        try {
            const response = await api.removeMember(userNo);

            alert("삭제되었습니다.");

            navigate("/member");

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