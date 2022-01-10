import './App.css';
import Dash from './containers/Dash';
import Landing from './containers/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path='/token/' element={<LoggedIn />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dash />} />
  </Routes>
  );
}

export default App;
