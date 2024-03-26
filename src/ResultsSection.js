import Results from './Results.js';
import styles from './styles/ResultsSection.module.css';
import Playlist from './Playlist.js'

const ResultsSection = ({trackList, playlistTracksData}) => {
    

    
    return(
        <div className = {styles.right}>
            <Results trackList = {trackList}/>
            <Playlist playlistTracksData = {playlistTracksData}/>
        </div>
    );
}

export default ResultsSection;