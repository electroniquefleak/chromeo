import { useEffect } from 'react'
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ColorWheel from "../components/ColorWheel";
import Navbar from "../components/Navbar";
import PlaylistContainer from "./PlaylistContainer";
import { authEndpoint, clientId, redirectUri } from "../services/spotify_setup";

const Dash = ({playlist, token}) => {
    const showPlayListContainer = playlist && playlist.tracks.length > 0;
    const hasSpotifyToken = token.length > 0;
    const spotifyBtn = (// possible include scopes: &scope=${scopes.join("%20")}
            <a
                className="btn btn--loginApp-link"
                href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}
            >
                Login to Spotify
            </a>);
    return (
        <>
            <Navbar />
            {!hasSpotifyToken && spotifyBtn}
            <ColorWheel />
            {showPlayListContainer ? (
                <div>
                    <div>Save to your library button *TODO*</div>
                    <PlaylistContainer />
                </div>
            ) : hasSpotifyToken ? 
            <h2>Begin to select colors. Get started.</h2> :
             (
                <div>
                    <h2>Please login to Spotify!</h2>
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
        token: state.token,
    }
}
export default connect(mapStateToProps)(Dash);