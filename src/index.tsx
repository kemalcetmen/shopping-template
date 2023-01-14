import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Layout from './components/Layout';
import { Provider } from "react-redux"
import store from "./store";
// import {createStore} from ''
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout><App /></Layout>}>
              <Route index element={<Layout><App /></Layout>} />
              <Route path="favorites" element={<Layout><App /></Layout>} />
              <Route path="basket" element={<Layout><App /></Layout>} />
            <Route path="*" element={<App />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)