import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Bag from './Bag';
import Favorites from './Favorites';
import Layout from './components/Layout';
import { Provider } from "react-redux"
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route index element={<Layout><App /></Layout>} />
              <Route path="favorites" element={<Layout><Favorites /></Layout>} />
              <Route path="bag" element={<Layout><Bag /></Layout>} />
            <Route/>
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)