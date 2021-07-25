import { useState, useEffect } from 'react'
import Authorization from './Authorization'
import { Container, Form } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearch from './TrackSearch'
import Player from './Player'

//creating an API with Spotify's API
const spotifyApi = new SpotifyWebApi({
    clientId: "bf0bb939e1c341428995c2f7e589f077"
})

export default function Dashboard({ code }) {
    const accessToken = Authorization(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setplayingTrack] = useState()

    function chooseTrack(track) {
        setplayingTrack(track)
        setSearch('')
    }

    //If the accessToken changes, make sure to assign it to our API once again so we can use it


    //Searching
    useEffect(() => {
        if (!search)
            return setSearchResults([])
        if (!accessToken)
            return
        //It does the request after the user is done typing the song
        let cancel = false
        //Searching using our API
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            //attributes
            setSearchResults(res.body.tracks.items.map(track => {
                //Get the smallest image
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest, images) => {
                        if (images.heigth < smallest.heigth)
                            return images
                            return smallest
                    }, track.album.images[0])
                
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })

        return () => cancel = true 
    }, [search, accessToken])

    useEffect(() => {
        if (!accessToken)
            return

        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    //Search Bar, song section, and tracks' images
    return (
        <Container className="d-flex flex-column py-2" style={{
            heigth: "100vh"
        }}>
            <Form.Control 
                type="search"
                placeholder="Search Song/Artist"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {searchResults.map(track => (
                    <TrackSearch track={ track } key={ track.uri} chooseTrack={chooseTrack}/>
                ))}
            </div>
            
            <div style={{ position: "fixed", bottom: 0, width: "100%", left: 0}}>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
            </div>
        </Container>
    )
}
