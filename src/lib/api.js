import client from "./client";

// 관리자 등록
export const adminSetup = (userId, userName, userPw) => client.post("/users/setup/", { userId, userName, userPw });

// 회원가입
export const signUp = (userId, userPw, userName, job) => client.post("/users", { userId, userPw, userName, job });

// 로그인
export const signIn = (userId, password) => client.post(`/authenticate?username=${userId}&password=${password}`);
export const getMyInfo = () => client.get("/users/myinfo");

// 공통코드목록
export const fetchGroupCodeList = () => client.get("codes/codeGroup");
export const fetchJobCodeList = () => client.get("codes/job");

// 코드그룹
export const fetchCodeGroupList = () => client.get("codegroups");
export const fetchCodeGroup = (groupCode) => client.get(`/codegroups/${groupCode}`);
export const modifyCodeGroup = (groupCode, groupName) => client.put(`/codegroups/${groupCode}`, { groupName });
export const registerCodeGroup = (groupCode, groupName) => client.post("/codegroups", { groupCode, groupName });
export const removeCodeGroup = (groupCode) => client.delete(`/codegroups/${groupCode}`);

// 코드상세
export const fetchCodeDetailList = () => client.get("codedetails");
export const fetchCodeDeatil = ({groupCode, codeValue}) => client.get(`codedetails/${groupCode}/${codeValue}`);
export const modifyCodeDetail = (groupCode, codeValue, codeName) => client.put(`/codedetails/${groupCode}/${codeValue}`, { codeValue, codeName });
export const registerCodeDetail = (groupCode, codeValue, codeName) => client.post("/codedetails", { groupCode, codeValue, codeName });
export const removeCodeDetail = (groupCode, codeValue) => client.delete(`/codedetails/${groupCode}/${codeValue}`);

// 멤버
export const fetchMemberList = () => client.get("users");
export const fetchMember = (userNo) => client.get(`/users/${userNo}`);
export const modifyMember = (userNo, payload) => client.put(`/users/${userNo}`, { payload });
export const registerMember = (userId, userPw, userName, job) => client.post("/users", { userId, userPw, userName, job });
export const removeMember = (userNo) => client.delete(`/users/${userNo}`);



export const readItemApi = (itemId) => client.get(`/items/${itemId}`);
