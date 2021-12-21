import './App.css';
import Nav from './containers/Nav';
import Landing from './containers/Landing';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Landing />} />
  </Routes>
  );
}

export default App;
