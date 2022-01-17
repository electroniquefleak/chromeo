import { Stack, Divider, Paper } from "@mui/material";
import { connect } from "react-redux";
import TrackCard from "../components/TrackCard";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PlaylistContainer = ({playlist}) => {

    const {playlistName: name, tracks} = playlist;

    return (
        <>
            {name && <h1>{name}</h1>}
            <Stack className="trackCards" 
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}
            >
                {tracks.map(track => {
                    return (
                        <Item key={track.id}>
                            <TrackCard
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