import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './store';
import Cookies from "js-cookie";
import { setAccessToken, checkMyInfo } from './modules/auth';
import client from "./lib/client";

function loadUser() {
  try {
    const savedToken = Cookies.get("accessToken");

    if (!savedToken) {
      return;
    }

    configureStore.dispatch(setAccessToken(savedToken));

    client.defaults.headers.common.Authorization = `Bearer ${savedToken}`;

    configureStore.dispatch(checkMyInfo());

  } catch (e) {
    console.log(e);
  }
}

loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
