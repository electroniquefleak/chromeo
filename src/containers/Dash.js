import { Button, Box, Modal, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import ColorWheel from "../components/ColorWheel";
import Navbar from "../components/Navbar";
import PlaylistContainer from "./PlaylistContainer";
import { authEndpoint, clientId, redirectUri } from "../services/spotify_setup";
import { useNavigate } from "react-router";
import resetColors from "../actions/resetColors";
import savePlaylist from "../actions/savePlaylist";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import resetPlaylist from "../actions/resetPlaylist";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Dash = ({ playlist, colors, resetColors, savePlaylist, resetPlaylist }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [token, setToken] = useState(localStorage.token);
    const handleClose = () => setOpen(false);
    const openModal = () => setOpen(true);

    useEffect(() => {
        resetPlaylist()
        resetColors()
    }, [resetPlaylist, resetColors])

    const navigate = useNavigate();
    const selectedColors = colors.filter(color => color.isSelected)
    const showPlayListContainer = playlist && playlist.tracks.length > 0 && selectedColors.length > 0;

    const disconnectSpotify = () => {
        window.localStorage.removeItem("token")
        setToken('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        savePlaylist(name, playlist.tracks)
        navigate('/playlists')
    }

    const spotifyURL = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;

    const playlistsButton = <Link to="/playlists" style={{textDecoration: 'none'}}><Button className="playlistsButton" style={{ background: '#212F3D' }} variant="contained">Playlists</Button></Link>

    const spotifyBtn = (
            <div className='spotifyButton' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'white', justifyItems:'center'}}>
                <Button variant="contained" size="large" style={{width:'calc(100%/3)', background: '#222F3D', color:'white', textDecoration:'white'}} href={spotifyURL}>
                    <img className='thumbnail' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"} width={33} height={33}/>Connect to Spotify
                </Button>
            </div>);

    const spotifyLogoutBtn = (
        <div className='spotifyLogoutButton' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'none', justifyItems:'center'}}>
            <Button variant="contained" size="large" style={{width:'calc(100%/3)', background: '#222F3D', color:'white', textDecoration:'none'}} onClick={disconnectSpotify}>
                <img className='thumbnail' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"} width={33} height={33}/>Disconnect from Spotify
            </Button>
        </div>);

    return (
        <>
            <Navbar button={playlistsButton}/>
            {token ? spotifyLogoutBtn : spotifyBtn}
            {showPlayListContainer ? (
                <div className="dash">
                    <ColorWheel />
                    <div className='dashBtn' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'white', justifyItems:'center'}}>
                    <Button onClick={openModal} size="large" style={{width:'calc(100%/3)', background: '#212F3D'}} variant="contained">Save to Library</Button>
                    </div>
                    <PlaylistContainer />
                </div>
            ) : token ? (
                <div className="dash">
                    <ColorWheel />
                </div>
            )
             :
             (
                <div className="dash">
                    <h4>{playlist.error}</h4>
                </div>
            )
        }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography mb={2}>To save a playlist, you must give it a name.</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Playlist Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Button type="submit">Save Playlist</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

const mapStateToProps = state => {
    return {
        playlist: state.playlist,
        colors: state.colors
    }
}

export default connect(mapStateToProps, { resetColors, savePlaylist, resetPlaylist })(Dash);