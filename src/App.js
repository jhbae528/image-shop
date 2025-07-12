//import logo from './logo.svg';
import './App.css';

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";
import AdminSetupPage from './pages/member/AdminSetupPage';

//import ItemListContainer from "./containers/ItemListContainer";
//import ItemReadContainer from "./containers/ItemReadContainer";
//import ItemRegisterContainer from "./containers/ItemRegisterContainer";
//import ItemModifyContainer from "./containers/ItemModifyContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/member/setup" element={<AdminSetupPage/>} />
    </Routes>
  );
}

export default App;
