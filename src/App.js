import React from 'react';
import MainNavbar from './components/MainNavbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import SocialsNavbar from './components/SocialsNavbar';

function App() {
  return (
    <div className="App">
      <MainNavbar></MainNavbar>
      <SocialsNavbar></SocialsNavbar>
    </div>
  );
}

export default App;
