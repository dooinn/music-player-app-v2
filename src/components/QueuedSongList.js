import React from "react";
import {
    Typography,
    Avatar,


} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useMutation } from "@apollo/react-hooks";
import { ADD_OR_REMOVE_FROM_QUEUE } from "../graphql/mutations";
import { Container, QueueList } from '../styles/QueuedSongListElements'

function QueuedSongList({ queue }) {


    return (

        <Container>
            <Typography color="textSecondary" variant="button">
                QUEUE ({queue.length})
        </Typography>
            {queue.map(song => (
                <QueuedSong key={song.id} song={song} />
            ))}
        </Container>

    );
}



function QueuedSong({ song }) {

    const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE, {
        onCompleted: data => {
            localStorage.setItem("queue", JSON.stringify(data.addOrRemoveFromQueue));
        }
    });
    const { thumbnail, artist, title } = song;

    function handleAddOrRemoveFromQueue() {
        addOrRemoveFromQueue({
            variables: { input: { ...song, __typename: "Song" } }
        });
    }

    return (
        <QueueList>
            <div className="info-wrap">
                <img src={thumbnail} alt="Song thumnnail" className="queue-thumbnail"></img>
                <div className="text-container">
                    <h4>{title}</h4>
                    <p>{artist}</p>
                </div>
            </div>
            <Delete onClick={handleAddOrRemoveFromQueue} className="delete-btn" />

        </QueueList>
    );
}

export default QueuedSongList;
