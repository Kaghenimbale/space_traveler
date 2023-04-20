import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Rockets from './components/Rocket/Rockets';
import Header from './components/Header/Header';
import Mission from './components/Mission/Mission';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="mission" element={<Mission />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<h2>Something Went wrong!</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
