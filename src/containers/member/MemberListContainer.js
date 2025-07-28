import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MemberList from "../../components/member/MemberList";
import { fetchList, FETCH_LIST} from "../../modules/member";

const MemberListContainer = () => {

    const dispatch = useDispatch();

    const { memberList, isLoading } = useSelector(({member, loading}) => ({

    }));

    useEffect(() => {

    }, [dispatch]);

    return <MemberList
        memberList={memberList}
        isLoading={isLoading}
    />
}

export default MemberListContainer;