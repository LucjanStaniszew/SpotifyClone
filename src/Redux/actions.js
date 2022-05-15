import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../Components/LogIn/LogIn";

const spotify = new SpotifyWebApi();

export function setToken() {
    return async function (dispatch) {
        try {
            const logged = await getTokenFromUrl()
            const token = logged.access_token
            return dispatch({
                type: "SET_TOKEN",
                payload: token
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function setUser(user) {
    return async function (dispatch) {
        try {
            const user = await spotify.getMe()
            return dispatch({
                type: "SET_USER",
                payload: user
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getArtist(artist, token) {
    return async function (dispatch) {
            const artists = await spotify.searchArtists(artist, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
            //console.log(artists)
            //console.log(artists.artists)
            //console.log(artists.artists.items[0].id)
            //console.log(artists.artists.items.filter(a => a.name === artist))
            //const artistId = artists.artists.items[0].id
            //console.log(artistId);
            return dispatch({
                type: "GET_ARTIST",
                payload: artists.artists.items.filter(a => a.name === artist)[0].id
            })
    }
}

export function getArtistAlbum(artistId, token) {
    console.log(artistId)
    return async function (dispatch) {
        try {
            const artistAlbums = await spotify.getArtistAlbums(artistId,{
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
            console.log(artistAlbums)
            return dispatch({
                type: "GET_ARTIST_ALBUMS",
                payload: artistAlbums
            })
        } catch (error) {
            console.log(error)
        }
    }
}