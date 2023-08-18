import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './screens/Home.tsx';
import Navigation from './components/Navigation.tsx';
const Main = () => {
  return (
    <div id="page-container">
    <Header/>
    <Navigation/>
    <Footer/>
  </div>
  )
}

export default Main
