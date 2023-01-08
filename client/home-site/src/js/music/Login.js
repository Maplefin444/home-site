import React from 'react'
import { Container } from 'react-bootstrap'
const URL = "https://accounts.spotify.com/authorize?client_id=9029c788909841b3b3dce900c3cd6644&response_type=code&redirect_uri=http://localhost:3000/musichome&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
export default function Login() {
    return (
        <div
            style={{ minHeight: "100vh", display: "flex", justifyContent:"center", alignItems:"center"}}
        >
            <a className="btn btn-success btn-lg" href={URL}>
                Login With Spotify
            </a>
        </div>
    );
}
