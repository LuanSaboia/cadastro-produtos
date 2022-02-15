import React from 'react'
import Navbar from './components/navbar'
import Router from './Router/Router';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Router />
      </div>
    </>
  );
}

export default App;
