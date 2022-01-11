import { Button } from "@mui/material";
import { connect } from "react-redux";
import ColorWheel from "../components/ColorWheel";
import Navbar from "../components/Navbar";
import PlaylistContainer from "./PlaylistContainer";
import { authEndpoint, clientId, redirectUri } from "../services/spotify_setup";

const Dash = ({playlist, colors}) => {
    const selectedColors = colors.filter(color => color.isSelected)
    const showPlayListContainer = playlist && playlist.tracks.length > 0 && selectedColors.length > 0;
    const hasSpotifyToken = window.localStorage.getItem("token")
    const spotifyBtn = (
            <div className='spotifyButton' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'none', justifyItems:'center'}}>
                <Button variant="contained" size="large" style={{width:'calc(100%/3)', background: '#FFFFFF', color:'black', textDecoration:'none'}} href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>
                    Connect to Spotify
                </Button>
            </div>);
    const spotifylogoutBtn = (
        <div className='spotifyLogoutButton' style={{display:'flex',justifyContent:'center', color:'white', textDecoration:'none', justifyItems:'center'}}>
            <Button variant="contained" size="large" style={{width:'calc(100%/3)', background: '#FFFFFF', color:'black', textDecoration:'none'}} href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>
                Disconnect from Spotify
            </Button>
        </div>);
    return (
        <>
            <Navbar />
            {!hasSpotifyToken && spotifyBtn}
            {showPlayListContainer ? (
                <div>
                    <ColorWheel />
                    <PlaylistContainer />
                    <div>Save to your library button *TODO*</div>
                </div>
            ) : hasSpotifyToken ? (
                <div>
                    {spotifylogoutBtn}
                    <ColorWheel />
                </div>
            )
             :
             (
                <div>
                    <h2>{playlist.message}</h2>
                </div>
            )
        }
        </>
    );
}
const mapStateToProps = state => {
    return {
        playlist: state.playlist,
        colors: state.colors
    }
}
export default connect(mapStateToProps)(Dash);