import React, { useEffect, useRef, useState, useContext } from "react";
import QueuedSongList from "./QueuedSongList";
import {
    IconButton,
    Slider,

} from "@material-ui/core";
import { SkipPrevious, PlayArrow, SkipNext, Pause } from "@material-ui/icons";
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { SongContext } from "../App";
import { useQuery } from "@apollo/react-hooks";
import { GET_QUEUED_SONGS } from "../graphql/queries";
import ReactPlayer from "react-player";
import { PlayerContainer, Container } from "../styles/SongPlayerElements";



function SongPlayer() {
    const { data } = useQuery(GET_QUEUED_SONGS);
    const reactPlayerRef = useRef();
    const { state, dispatch } = useContext(SongContext);
    const [played, setPlayed] = useState(0);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [positionInQueue, setPositionInQueue] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        const songIndex = data.queue.findIndex(song => song.id === state.song.id);
        setPositionInQueue(songIndex);
    }, [data.queue, state.song.id]);

    useEffect(() => {
        const nextSong = data.queue[positionInQueue + 1];
        if (played >= 0.99 && nextSong) {
            setPlayed(0);
            dispatch({ type: "SET_SONG", payload: { song: nextSong } });
        }
    }, [data.queue, played, dispatch, positionInQueue]);

    function handleTogglePlay() {
        dispatch(state.isPlaying ? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" });
    }

    function handleProgressChange(event, newValue) {
        setPlayed(newValue);
    }

    function handleSeekMouseDown() {
        setSeeking(true);
    }

    function handleSeekMouseUp() {
        setSeeking(false);
        reactPlayerRef.current.seekTo(played);
    }

    function formatDuration(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 8);
    }

    function handlePlayNextSong() {
        const nextSong = data.queue[positionInQueue + 1];
        if (nextSong) {
            dispatch({ type: "SET_SONG", payload: { song: nextSong } });
        }
    }

    function handlePlayPrevSong() {
        const prevSong = data.queue[positionInQueue - 1];
        if (prevSong) {
            dispatch({ type: "SET_SONG", payload: { song: prevSong } });
        }
    }

    function showModal() {
        return setModalOpen(!modalOpen)
    }

    return (
        <>
            <Container>
                <div className={modalOpen ? "modal active" : "modal"} >
                    <QueuedSongList queue={data.queue} />
                </div>
                <PlayerContainer>
                    <div className="left-container">
                        <div>
                            <h2 className="song-title">{state.song.title}</h2>
                            <p className="song-artist"> {state.song.artist}</p>
                        </div>
                        <div className="bottom-container">
                            <div>
                                <IconButton onClick={handlePlayPrevSong}>
                                    <SkipPrevious />
                                </IconButton>
                                <IconButton onClick={handleTogglePlay}>
                                    {state.isPlaying ? (
                                        <Pause />
                                    ) : (
                                        <PlayArrow />
                                    )}
                                </IconButton>
                                <IconButton onClick={handlePlayNextSong}>
                                    <SkipNext />
                                </IconButton>
                                <p className="song-artist">{formatDuration(playedSeconds)}</p>
                            </div>
                            <div className="queueList-btn">
                                <QueueMusicIcon onClick={showModal} />

                            </div>

                        </div>


                        <Slider
                            onMouseDown={handleSeekMouseDown}
                            onMouseUp={handleSeekMouseUp}
                            onChange={handleProgressChange}
                            value={played}
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                        />
                    </div>
                    <div className="right-container">
                        <img className="song-thumbnail" src={state.song.thumbnail} alt={state.song.title}></img>
                    </div>


                    <ReactPlayer
                        ref={reactPlayerRef}
                        onProgress={({ played, playedSeconds }) => {
                            if (!seeking) {
                                setPlayed(played);
                                setPlayedSeconds(playedSeconds);
                            }
                        }}
                        url={state.song.url}
                        playing={state.isPlaying}
                        hidden
                    />


                </PlayerContainer>

            </Container>

        </>
    );
}

export default SongPlayer;
