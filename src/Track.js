import {useEffect, useState} from 'react'
import styles from './styles/Track.module.css'
import note from './note.jpg'




const Track = ({song, artist, album, albumCover, isAdd, accessKey, addSong, removeSong}) =>{
    
    // const [trackName, setTrackName] = useState(props.song)
    // const [artist, setArtist] = useState(props.artist)
    // const [album, setAlbum] = useState(props.album)
    // const [albumPic, setAlbumPic] = useState(props.albumCover)
    // const [isAdd, setAdd] = useState(true);
    // const [songId, setSongId] = useState(props.accessKey);
   
// useEffect(()=>{
//     if(!props.isAdd){
        
//         setAdd(false);
//     }
// },[props.isAdd])
    

    const addHandler = () =>{
        console.log('ADD HANDLER');
        addSong(song, artist, album, albumCover, accessKey)
    }

    return(
        <div className = {styles.track}>
            <img src = {albumCover} alt = 'missing' />
            <div className = {styles.song}><h2>{song}</h2></div>
            <h2 className ={styles.artist}>{artist}</h2>
            <h2 className = {styles.album}>{album}</h2>
            {isAdd
            ?<p id = {styles.add} onClick={addHandler}>+</p>
            : <p id={styles.add} onClick={() => removeSong(accessKey)}>-</p>
}
        </div>
    );
}

export default Track;