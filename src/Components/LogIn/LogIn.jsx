export const getTokenFromUrl = () => {
  return window.location.hash.substring(1).split("&")
  .reduce((initial, item) => {
    let parts = item.split("=")
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
  }, {})
}

const autorizacion = "https://accounts.spotify.com/authorize";
const clientId = "39b4aa1ee9534413a40b7fefe4dca807";
const redirectURI = "http://localhost:3000/home";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

const LogIn = `${autorizacion}?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&show_dialog=true`

export default LogIn;