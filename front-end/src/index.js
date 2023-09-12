import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SingleProduct from './Components/Singleproduct';
import { Provider } from 'react-redux';
import store from './store'
import Header from './Components/common/header';
import HomePage from './Components/Home/homePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/product/:id",
    element: <SingleProduct/>,
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/>
      <RouterProvider router={router} />
      <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        fontFamily: 'Poppins' ,
        borderRadius: 2,
        colorBgContainer: '#f6ffed',
      },
    }}
  >
      </ConfigProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
