import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
        <h1 className='header1'>CHROMEO</h1>
        <h2 className='header2'>A web visualizer and music discoverability application using the Spotify API.</h2>
        <Link to="/signup" className='signupButton'><Button variant="contained" style={{ background: '#131F2B' }}>Sign-up</Button></Link>
        <Link to="/login" className='loginButton'><Button variant="contained" style={{ background: '#131F2B' }}>Login</Button></Link>
        </>
    )
}

export default Landing;