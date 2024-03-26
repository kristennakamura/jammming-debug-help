import {useEffect, useState} from 'react'
import styles from './styles/Track.module.css'
import note from './note.jpg'




const Track = (props) =>{
    
    const [trackName, setTrackName] = useState(props.song)
    const [artist, setArtist] = useState(props.artist)
    const [album, setAlbum] = useState(props.album)
    const [albumPic, setAlbumPic] = useState(props.albumCover)
    const [isAdd, setAdd] = useState(true);
    const [songId, setSongId] = useState(props.accessKey);
   
useEffect(()=>{
    if(!props.isAdd){
        
        setAdd(false);
    }
},[])
    

    const addHandler = () =>{
        console.log('ADD HANDLER');
        props.addSong(trackName, artist, album, albumPic, songId)
    }

    return(
        <div className = {styles.track}>
            <img src = {albumPic} alt = 'missing' />
            <div className = {styles.song}><h2>{trackName}</h2></div>
            <h2 className ={styles.artist}>{artist}</h2>
            <h2 className = {styles.album}>{album}</h2>
            {isAdd
            ?<p id = {styles.add} onClick={addHandler}>+</p>
            : <p id={styles.add} onClick={() => props.removeSong(props.accessKey)}>-</p>
}
        </div>
    );
}

export default Track;