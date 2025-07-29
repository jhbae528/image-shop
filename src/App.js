import './App.css';
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AdminSetupPage from './pages/member/AdminSetupPage';
import SignUpPage from './pages/auth/SignUpPage';
import SignInPage from "./pages/auth/SignInPage";
import CodeGroupListPage from "./pages/codegroup/CodeGroupListPage";
import CodeGroupReadPage from "./pages/codegroup/CodeGroupReadPage";
import CodeGroupModifyPage from "./pages/codegroup/CodeGroupModifyPage";
import CodeGroupRegisterPage from "./pages/codegroup/CodeGroupRegisterPage";
import CodeDetailListPage from "./pages/codedetail/CodeDetailListPage";
import CodeDetailReadPage from "./pages/codedetail/CodeDetailReadPage";
import CodeDetailModifyPage from "./pages/codedetail/CodeDetailModifyPage"
import CodeDetailRegisterPage from "./pages/codedetail/CodeDetailRegisterPage";
import MemberListPage from "./pages/member/MemberListPage";
import MemberReadPage from "./pages/member/MemberReadPage";
import MemberModifyPage from "./pages/member/MemberModifyPage"
import MemberRegisterPage from "./pages/member/MemberRegisterPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      {/* 관리자등록 */}
      <Route path="/member/setup" element={<AdminSetupPage/>} />
      {/* 회원가입 */}
      <Route path="/signup" element={<SignUpPage/>} />
      {/* 로그인 */}
      <Route path="/signin" element={<SignInPage/>} />
      {/* 코드그룹 관리 */}
      <Route path="/codegroup" element={<CodeGroupListPage/>} />
      <Route path="/codegroup/read/:groupCode" element={<CodeGroupReadPage/>} />
      <Route path="/codegroup/edit/:groupCode" element={<CodeGroupModifyPage/>} />
      <Route path="/codegroup/create" element={<CodeGroupRegisterPage/>} />
      {/* 코드상세 관리 */}
      <Route path="/codedetail" element={<CodeDetailListPage/>} />
      <Route path="/codedetail/read/:groupCode/:codeValue" element={<CodeDetailReadPage/>} />
      <Route path="/codedetail/edit/:groupCode/:codeValue" element={<CodeDetailModifyPage/>} />
      <Route path="/codedetail/create" element={<CodeDetailRegisterPage/>} />
      {/* 멤버 관리 */}
      <Route path="/member" element={<MemberListPage/>} />
      <Route path="/member/read/:userNo" element={<MemberReadPage/>} />
      <Route path="/member/edit/:userNo" element={<MemberModifyPage/>} />
      <Route path="/member/create" element={<MemberRegisterPage/>} />
    </Routes>
  );
}

export default App;

