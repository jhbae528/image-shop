import React from "react";
import { Link } from "react-router";
import { fetchJobCodeList } from "../../lib/api";

function MemberRead({
    member,
    isLoading,
    userNo,
    onRemove
}) {

    const [jobCodeList, setJobCodeList] = useState([]);

    const getJobCodeList = async () => {
        try {
            const response = await fetchJobCodeList();
            setJobCodeList(response.data);
        } catch(e) {
            throw e;
        }
    }

    useEffect(() => {
        console.log("components/member/MemberRead => useEffect -> getJobCodeList");
        getJobCodeList();
    }, []);

    return (
        <div align="center">
            <h2>회원 상세보기</h2>
            {isLoading && "로딩중..."}
            {!isLoading && member && (
                <></>
            )}
        </div>
    )
}

export default MemberRead;