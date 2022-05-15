const initialState = {
    user: null,
    userAlbums: [],
    savedAlbums: [],
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
                artistAlbums: action.payload
            }
        }

        case "SET_ARTIST": {
            return {
                ...state,
                artist: action.payload
            }
        }

        case "SET_USER": {
            return {
                ...state,
                user: action.payload
            }
        }

        case "SAVE_ALBUM": {
            return {
                ...state,
                savedAlbums: [...state.savedAlbums, action.payload]
            }
        }

        case "GET_MY_ALBUMS": {
            return {
                ...state,
                userAlbums: action.payload
            }
        }

        default:
            return state;
    }
}

export default rootReducer;