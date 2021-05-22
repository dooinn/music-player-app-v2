import React, { useContext, createContext, useReducer } from 'react';
import Header from './components/Header';
import SongPlayer from './components/SongPlayer';
import songReducer from './reducer';

export const SongContext = createContext({
  song: {
    id: "bef8a1ca-6db1-4f44-b47c-8da14c12b508",
    title: "A Way Home",
    artist: "Memorex Memories",
    thumbnail: "http://img.youtube.com/vi/KbC46oJmLh4/0.jpg",
    url: "https://www.youtube.com/watch?v=KbC46oJmLh4",
    duration: 239
  },
  isPlaying: false
})

function App() {

  const initialSongState = useContext(SongContext);
  const [state, dispatch] = useReducer(songReducer, initialSongState)

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <Header />
        <SongPlayer />


      </div>
    </SongContext.Provider>

  );
}

export default App;
