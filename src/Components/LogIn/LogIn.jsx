export const getTokenFromUrl = () => {
  return window.location.hash.substring(1).split("&")
  .reduce((initial, item) => {
    let parts = item.split("=")
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
  }, {})
}

export const finalAccessToken = () => {
  sessionStorage.setItem("token", getTokenFromUrl())
  console.log(sessionStorage.getItem("token"))
}

const autorizacion = "https://accounts.spotify.com/authorize";
const clientId = "39b4aa1ee9534413a40b7fefe4dca807";
const clientId2 = "6f40f56535ce4766bbb386dfd94864c3";
const redirectURI = "http://localhost:3000";

const scopes = [
  "ugc-image-upload",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-follow-modify",
  "user-follow-read",
  "user-read-recently-played",
  "user-read-playback-position",
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "app-remote-control",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-modify",
  "user-library-read"
];

const LogIn = `${autorizacion}?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&show_dialog=true`

export default LogIn;