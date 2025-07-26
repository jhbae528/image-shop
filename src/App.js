import './App.css';
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import AdminSetupPage from './pages/member/AdminSetupPage';
import CodeGroupListPage from "./pages/codegroup/CodeGroupListPage";
import CodeGroupReadPage from "./pages/codegroup/CodeGroupReadPage";
import CodeGroupModifyPage from "./pages/codegroup/CodeGroupModifyPage";
import CodeGroupRegisterPage from "./pages/codegroup/CodeGroupRegisterPage";
import CodeDetailListPage from "./pages/codedetail/CodeDetailListPage";
import CodeDetailReadPage from "./pages/codedetail/CodeDetailReadPage";
import CodeDetailModifyPage from "./pages/codedetail/CodeDetailModifyPage"
import CodeDetailRegisterPage from "./pages/codedetail/CodeDetailRegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/member/setup" element={<AdminSetupPage/>} />
      <Route path="/codegroup" element={<CodeGroupListPage/>} />
      <Route path="/codegroup/read/:groupCode" element={<CodeGroupReadPage/>} />
      <Route path="/codegroup/edit/:groupCode" element={<CodeGroupModifyPage/>} />
      <Route path="/codegroup/create" element={<CodeGroupRegisterPage/>} />
      <Route path="/codedetail" element={<CodeDetailListPage/>} />
      <Route path="/codedetail/read/:groupCode/:codeValue" element={<CodeDetailReadPage/>} />
      <Route path="/codedetail/edit/:groupCode/:codeValue" element={<CodeDetailModifyPage/>} />
      <Route path="/codedetail/create" element={<CodeDetailRegisterPage/>} />
    </Routes>
  );
}

export default App;

