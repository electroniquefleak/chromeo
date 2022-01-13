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
    const spotifyBtn = (
            <div className='spotifyButton' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'none', justifyItems:'center'}}>
                <Button variant="contained" size="large" style={{width:'calc(100%/3)', background: '#FFFFFF', color:'black', textDecoration:'none'}} href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>
                    Connect to Spotify
                </Button>
            </div>);
    const spotifyLogoutBtn = (
        <div className='spotifyLogoutButton' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'none', justifyItems:'center'}}>
            <Button variant="contained" size="large" style={{width:'calc(100%/3)', background: '#FFFFFF', color:'black', textDecoration:'none'}} onClick={disconnectSpotify}>
                Disconnect from Spotify
            </Button>
        </div>);
    return (
        <>
            <Navbar />
            {hasSpotifyToken ? spotifyLogoutBtn : spotifyBtn}
            {showPlayListContainer ? (
                <div>
                    <ColorWheel />
                    <Button onClick={openModal}>Save to Library</Button>
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
                    <h2>{playlist.error}</h2>
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
                    <Typography mb={2}>Save this playlist. Give it a name:</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Playlist Name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Save Playlist</Button>
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