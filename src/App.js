import './App.css';
import Dash from './containers/Dash';
import Landing from './containers/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn'
import Library from './containers/Library'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';

function App({userToken}) {
  const [authenticated, setAuthenticated] = useState(false)
  useEffect(() => {
    let auth = !!(userToken || localStorage.getItem("userToken"))
    setAuthenticated(auth)    
  }, [userToken])

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/token/' element={<LoggedIn />} />
      <Route path="/dashboard" element={authenticated ? <Dash /> : <Login />} />
      <Route path="/playlists" element={authenticated ? <Library /> : <Login />} />
      <Route path="*" element={<Landing/>} />
    </Routes>
  );
}

const mapStateToProps = (state) => {
  return {
    userToken: state.userToken
  }
}

export default connect(mapStateToProps)(App);
