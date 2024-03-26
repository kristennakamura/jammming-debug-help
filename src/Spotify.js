

const clientId = 'b2352b57d45b46feae549c7b727600be';
const redirectURI = 'http://localhost:3000/';
let accessToken = '';
let jsonResponse;


//const state = generateRandomString(16);
//localStorage.setItem(stateKey, state);
//var scope = 'user-read-private user-read-email';



const getToken = async () => {

    if (accessToken) {
        console.log("Already have accessToken: " + accessToken)
        return accessToken;
      }



    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
        console.log("inside if");
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = accessUrl;
    }
}

const searchSongs = async (name) => {
    
    const url = `https://api.spotify.com/v1/search?q=track%3A${name}&type=track`
const auth = {
    headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }

    
        const newTracks = await fetch(url,auth).then((response) =>{
            return response.json()
        }).then((jsonResponse)=>{
            console.log('RESPONSE: '+jsonResponse)
            if (!jsonResponse.tracks) {
                console.log('NO TRACKS');
            return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri,
                    albumCover: track.album.images[0].url
                  }));
            });

            return newTracks;
        

        /*if(response.ok){
            console.log('log it DOWN');
            jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse.then();
        }*/

        

}


/*
console.log('URL: '+url)
try{
const response = await fetch(access);
if(response.ok){
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}
}catch(e){
    console.log("ERROR: " +e);
}

}*/

export {getToken, searchSongs, jsonResponse};