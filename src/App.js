import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Mission from './components/Mission/Mission';
import Profile from './components/Profile/Profile';
import Rocket from './components/Rocket/Rocket';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="mission" element={<Mission />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<h2>Something Went wrong!</h2>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
