import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SingleProduct from './Screens/Singleproduct';
import { Provider } from 'react-redux';
import store from './store'
import Header from './Components/common/header';
import HomePage from './Screens/Home/homePage';
import Login from './Screens/Login';
import Cart from './Screens/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#06142E',
        fontFamily: 'Poppins' ,
        borderRadius: 2,
        colorBgContainer: '#f6ffed',
      },
      components: {
        Button: {
          colorPrimary: '#06142E',
        },
      },
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </ConfigProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
