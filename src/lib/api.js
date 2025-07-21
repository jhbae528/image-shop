import client from "./client";

export const adminSetup = (userId, userName, userPw) => client.post("/users/setup/", { userId, userName, userPw });
export const signIn = (userId, password) => client.post(`/authenticate?username=${userId}&password=${password}`);
export const getMyInfo = () => client.get("/users/myinfo");

export const fetchCodeGroupList = () => client.get("codegroups");
export const fetchCodeGroup = (groupCode) => client.get(`/codegroups/${groupCode}`);
export const modifyCodeGroup = (groupCode, groupName) => client.put(`/codegroups/${groupCode}`, { groupName });
export const registerCodeGroup = (groupCode, groupName) => client.post("/codegroups", { groupCode, groupName });
export const removeCodeGroup = (groupCode) => client.delete(`/codegroups/${groupCode}`);

export const fetchCodeDetailList = () => client.get("codedetails");
export const fetchCodeDeatil = (groupCode, codeValue) => client.get(`codedetails/${groupCode}/${codeValue}`);
export const modifyCodeDetail = (groupCode, codeValue, codeName) => client.put(`/codegroups/${groupCode}${codeValue}`, { codeName });

export const readItemApi = (itemId) => client.get(`/items/${itemId}`);

//export default api;