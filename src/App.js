import './App.css';
import React, { useCallback } from 'react';
import {getToken, searchSongs, jsonResponse} from './Spotify.js';
import {useState, useEffect} from 'react';
import SearchSection from './SearchSection.js';
import ResultsSection from './ResultsSection.js';
import Login from './Login.js'
import Track from './Track.js'

function App() {

  

const [token, setToken] = useState('');
const [text, setText] = useState('');
const [isLoggedIn, setLoggedIn] = useState(false);
const [trackList, setTrackList] = useState([]);
const [response,setResponse] = useState();
const [playlistTracksData, setPlaylistTracksData] = useState([]);
const [accuratePlaylistTracks,setAccuratePlaylistTracks] = useState();



function login(){
  setLoggedIn(true);
setToken(getToken());
}

useEffect(() => {
  login();
},[])

console.log('App component rendered');

useEffect(() => {
  console.log("Current playlist tracks after update:", playlistTracksData.map(track => track.accessKey));
  setAccuratePlaylistTracks(playlistTracksData);
}, [playlistTracksData]);

const addSong = useCallback((name,artist,album, albumCover, songId) =>{

  console.log("Current playlist tracks:", playlistTracksData.map(track => track.accessKey));

const trackExists = playlistTracksData.some((track) => 
  track.accessKey ===songId
)

if(!trackExists){
  setPlaylistTracksData((prev) => [
    ...prev,
    {
      key: songId,
      accessKey: songId,
      song: name,
      artist: artist,
      album: album,
      albumCover: albumCover,
      isAdd: false,
      removeSong: removeSong
    }
  ]);
  }else{
    console.log('track already in playlist');
  }
},[playlistTracksData]);

const removeSong = (id) =>{
  
  setPlaylistTracksData((currentTracks) =>{
    return currentTracks.filter((track)=>
    track.accessKey!==id
    )
  })
}


  const searchHandler = async () => {
    setTrackList([]);
    /*let encodedText = text.replaceAll(' ','%2520')*/
    let autoEncoded = encodeURIComponent(text)
    let jsonResults = await (searchSongs(autoEncoded));
    console.log('RESULTS: '+JSON.stringify(jsonResults));
    // for(let i=0;i<jsonResults.length;i++){
    //   console.log('key: '+ jsonResults[i].id);
    //   setTrackList((prev) =>
    //      [...prev, <Track key = {jsonResults[i].id} accessKey = {jsonResults[i].id} song = {jsonResults[i].name} artist = {jsonResults[i].artist} album = {jsonResults[i].album} albumCover = {jsonResults[i].albumCover} addSong = {addSong} setPlaylistTracksData = {setPlaylistTracksData} isAdd={true}/>]
    //   );
      
    // }
    setTrackList(jsonResults);

  }
  

  return (
    <div className="App">
      <div className='searchSide'>
        <h1 className = 'header'>Search Spotify</h1>
        <SearchSection handleSearch = {searchHandler} setText = {setText} />
      </div>
      <ResultsSection trackList = {trackList} playlistTracksData = {playlistTracksData} addSong={addSong} removeSong={removeSong} setPlaylistTracksData={setPlaylistTracksData} />
    </div>
  );
}

export default App;
