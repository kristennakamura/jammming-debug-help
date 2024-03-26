import Track from './Track.js'
import styles from './styles/Results.module.css'


const Results = ({trackList, addSong, removeSong, setPlaylistTracksData, playlistTracksData}) =>{


    const checkIfAdded = (id) => {
        console.log(id);
        // console.log(playlistTracksData)
        console.log(playlistTracksData.some(track => track.accessKey === id));
        return playlistTracksData.length > 0 ? !playlistTracksData.some(track => track.accessKey === id) : true;
    };
    
    return(
        <div className = {styles.results}>
            <header>
                <h1 className = {styles.resultsHeader}>Results</h1>
            </header>
            <ul className = {styles.trackList}>
                {
                trackList.map(track => (
                    <Track
                        key={track.id}
                        accessKey={track.id}
                        song={track.name}
                        artist={track.artist}
                        album={track.album}
                        albumCover={track.albumCover}
                        addSong={addSong}
                        removeSong={removeSong}
                        setPlaylistTracksData={setPlaylistTracksData}
                        isAdd={checkIfAdded(track.id)}
                    />
                ))
                }
            </ul>
            {/*<Track song = 'song1' artist = 'artist1' album = 'album1'/>
            <Track song = 'song2' artist = 'artist2' album = 'album2' />*/}
        </div>
    );
}

export default Results;