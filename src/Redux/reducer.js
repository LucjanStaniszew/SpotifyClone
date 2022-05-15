const initialState = {
    user: null,
    token: null,
    artist: null,
    artistId: null,
    artistAlbums: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                token: action.payload
            }
        
        case "GET_ARTIST": {
            return {
                ...state,
                artistId: action.payload
            }
        }

        case "SET_USER": {
            return {
                ...state,
                user: action.payload
            }
        }

        case "GET_ARTIST_ALBUMS": {
            return {
                ...state,
                artistAlbums: action.payload
            }
        }

        default:
            return state;
    }
}

export default rootReducer;