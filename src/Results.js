import Track from './Track.js'
import styles from './styles/Results.module.css'


const Results = ({trackList}) =>{

    
    return(
        <div className = {styles.results}>
            <header>
                <h1 className = {styles.resultsHeader}>Results</h1>
            </header>
            <ul className = {styles.trackList}>{trackList}</ul>
            {/*<Track song = 'song1' artist = 'artist1' album = 'album1'/>
            <Track song = 'song2' artist = 'artist2' album = 'album2' />*/}
        </div>
    );
}

export default Results;