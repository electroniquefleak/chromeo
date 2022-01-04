import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
        <h1>CHROMEO</h1>
        <h2>A web visualizer and music discoverability application using the Spotify API.</h2>
        <p>Based on the perceptual phenomenon of chromesthesia (or sound-to-color synesthesia), a cognitive trait where individuals experience visual iterations of auditory experiences.</p>
        <Link to="/signup"><Button variant="contained">Sign-up</Button></Link>
        <Link to="/login"><Button variant="contained">Login</Button></Link>
        </>
    )
}

export default Landing;