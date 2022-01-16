import { Button, Box, Modal, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import ColorWheel from "../components/ColorWheel";
import Navbar from "../components/Navbar";
import PlaylistContainer from "./PlaylistContainer";
import { authEndpoint, clientId, redirectUri, scopes } from "../services/spotify_setup";
import { useNavigate } from "react-router";
import resetColors from "../actions/resetColors";
import savePlaylist from "../actions/savePlaylist";
import { useEffect, useState } from "react";

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

const Dash = ({ playlist, colors, resetColors, savePlaylist }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const openModal = () => setOpen(true)
    const [name, setName] = useState("")

    useEffect(() => {
        resetColors()
    }, [resetColors])
    const navigate = useNavigate();
    const selectedColors = colors.filter(color => color.isSelected)
    const showPlayListContainer = playlist && playlist.tracks.length > 0 && selectedColors.length > 0;
    const hasSpotifyToken = window.localStorage.getItem("token")
    const disconnectSpotify = () => {
        window.localStorage.removeItem("token")
        navigate("/dashboard");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        savePlaylist(name, playlist.tracks)
        navigate('/playlists')
    }
    const spotifyURL = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;
    console.log({spotifyURL});
    const button = <Button className="playlistButton" style={{ background: '#212F3D' }} variant="contained">Playlists</Button>
    const spotifyBtn = (
            <div className='spotifyButton' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'white', justifyItems:'center'}}>
                <Button 
                    variant="contained" 
                    size="large" 
                    style={{width:'calc(100%/3)', background: '#222F3D', color:'white', textDecoration:'white'}} 
                    href={spotifyURL}
                >
                    Connect to Spotify
                </Button>
            </div>);
    const spotifyLogoutBtn = (
        <div className='spotifyLogoutButton' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'none', justifyItems:'center'}}>
            <Button 
                variant="contained"
                size="large"
                style={{width:'calc(100%/3)', background: '#222F3D', color:'white', textDecoration:'none'}} onClick={disconnectSpotify}
                >
                    Disconnect from Spotify
            </Button>
        </div>);
    return (
        <>
            <Navbar button={button}/>
            {hasSpotifyToken ? spotifyLogoutBtn : spotifyBtn}
            {showPlayListContainer ? (
                <div>
                    <ColorWheel />
                    <div className='dashBtn' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'white', justifyItems:'center'}}>
                    <Button onClick={openModal} size="large" style={{width:'calc(100%/3)', background: '#212F3D'}} variant="contained">Save to Library</Button>
                    </div>
                    <PlaylistContainer />
                </div>
            ) : hasSpotifyToken ? (
                <div>
                    <ColorWheel />
                </div>
            )
             :
             (
                <div>
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
export default connect(mapStateToProps, { resetColors, savePlaylist })(Dash);