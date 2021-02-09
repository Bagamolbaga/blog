import React from 'react'
import Header from './components/Header.jsx';
import HeaderNavMenu from './components/HeaderNavMenu.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <HeaderNavMenu />
        <Main />
        <Footer />
      </div>
    </React.Fragment>
    
  );
}

export default App;
