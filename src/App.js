import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <div className='main main--bg'>
          <Navbar/>
          <Home/>
      </div>
    </div>
  );
}

export default App;
