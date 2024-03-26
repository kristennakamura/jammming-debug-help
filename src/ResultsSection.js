import Results from './Results.js';
import styles from './styles/ResultsSection.module.css';
import Playlist from './Playlist.js'

const ResultsSection = ({trackList, playlistTracksData, addSong, removeSong, setPlaylistTracksData}) => {
    

    
    return(
        <div className = {styles.right}>
            <Results trackList = {trackList} addSong={addSong} setPlaylistTracksData={setPlaylistTracksData} playlistTracksData = {playlistTracksData} removeSong={removeSong}/>
            <Playlist playlistTracksData = {playlistTracksData} />
        </div>
    );
}

export default ResultsSection;