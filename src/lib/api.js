import client from "./client";

export const adminSetup = (userId, userName, userPw) => client.post("/users/setup/", { userId, userName, userPw });
export const signIn = (userId, password) => client.post(`/authenticate?username=${userId}&password=${password}`);
export const getMyInfo = () => client.get("/users/myinfo");

export const readCodeGroupList = () => client.get("codegroups");
export const readCodeGroup = (groupCode) => client.get(`/codegroups/${groupCode}`);
export const modifyCodeGroup = (groupCode, groupName) => client.put(`/codegroups/${groupCode}`, { groupName });
export const registerCodeGroup = (groupCode, groupName) => client.post("/codegroups}", { groupCode, groupName });
export const removeCodeGroup = (groupCode) => client.delete(`/codegroups/${groupCode}`);

// export const readItemListApi = () => axios.get("/items");
export const readItemApi = (itemId) => client.get(`/items/${itemId}`);
// export const registerItemApi = (itemName, price, description, file) => axios.post("/items", {itemName, price, description, file});
// export const modifyItemApi = (itemId, itemName, price, description, file) => axios.put(`/items/${itemId}`, {itemName, price, description, file});
// export const removeItemApi = (itemId) => axios.delete(`/items/${itemId}`);
//export const boardListApi = () => client.get("/boards");


//export default api;