import React from 'react';
import Header from './Components/common/header';
import { Provider } from 'react-redux';
import store from './store'
const Main = () => {
  return (
   <>
   <Provider store={store}>
   <header>
    <Header/>
   </header>
   </Provider>
   </>
  )
}

export default Main
