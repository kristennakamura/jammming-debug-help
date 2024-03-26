import styles from './styles/Playlist.module.css'
import Track from './Track.js';


const Playlist = ({playlistTracksData}) =>{

// let playlistTracks = []
// for(let i=0;i<playlistTracksData.length;i++){
//     playlistTracks.push(
//         <Track key = {playlistTrack.songId} accessKey = {playlistTracksData[i].accessKey} song = {playlistTracksData[i].song} artist = {playlistTracksData[i].artist} album = {playlistTracksData[i].album} albumCover = {playlistTracksData[i].albumCover} isAdd = {playlistTracksData[i].isAdd} removeSong = {playlistTracksData[i].removeSong} />
//     )
//     console.log('name of just added: ' + playlistTracks[i].name)
// }
// console.log('testing: ' +playlistTracks.length);

    return (
        <div className = {styles.playlist}>

            <header>
                <h1 className = {styles.header}>Create Playlist</h1>
            </header>
            <form className ={styles.nameForm}>
            <input className = {styles.playlistName} type='text' placeholder='Name your playlist'></input>
            </form>
            <ul className = {styles.playlistTracks}>
                {playlistTracksData.map((playlistTrack) => (
                    <Track 
                        key={playlistTrack.songId}
                        accessKey={playlistTrack.accessKey}
                        song={playlistTrack.song}
                        artist ={playlistTrack.artist}
                        album={playlistTrack.album}
                        albumCover={playlistTrack.albumCover}
                        isAdd={playlistTrack.isAdd}
                        removeSong={playlistTrack.removeSong} 
                    />
                ))}
            </ul>
            <form className = {styles.createForm}>
                <button className = {styles.saveButton}>Save to Spotify</button>
            </form>
        </div>
    )
}

export default Playlist;