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
            const artistId = artists.artists.items[0].id
            const artistAlbums = await spotify.getArtistAlbums(artistId, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
            console.log(artistAlbums)
            return dispatch({
                type: "GET_ARTIST",
                payload: artistAlbums.items
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