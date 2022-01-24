import { connect } from "react-redux";
import TrackCard from "../components/TrackCard";
import { Stack, Divider, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const PlaylistContainer = ({playlist}) => {

    const {playlistName: name, tracks} = playlist;

    return (
        <>  
        {name && <h3 className="playlistNames">{name}</h3>}
            <Stack className="trackCards" elevation={10} divider={<Divider orientation="horizontal" flexItem />} spacing={2}
            >
                {tracks.map(track => {
                    return (
                        <Item key={track.spotifyID}>
                            <TrackCard
                                spotifyID={track.spotifyID}
                                title={track.title}
                                explicit={track.explicit}
                                artist={track.artist}
                                length={track.length}
                                art={track.art}
                            />
                        </Item>
                    )
                })}
            </Stack>
        </>
    )
}

const mapStateToProps = state => {
    return {playlist: state.playlist}
}

export default connect(mapStateToProps)(PlaylistContainer);