import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
        <h1>CHROMEO</h1>
        <h3>A music visualizer using the Spotify API.</h3>
        <Link to="/signup">Sign-up</Link>
        <Link to="/login">Login</Link>
        </>
    )
}

export default Landing;