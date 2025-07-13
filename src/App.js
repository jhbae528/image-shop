import './App.css';
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import AdminSetupPage from './pages/member/AdminSetupPage';
import CodeGroupListPage from "./pages/codegroup/CodeGroupListPage";
import CodeGroupReadPage from "./pages/codegroup/CodeGroupReadPage";
import CodeGroupModifyPage from "./pages/codegroup/CodeGroupModifyPage";
import CodeGroupRegisterPage from "./pages/codegroup/CodeGroupRegisterPage";

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
    </Routes>
  );
}

export default App;

