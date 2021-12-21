import './App.css';
import Landing from './containers/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  );
}

export default App;
