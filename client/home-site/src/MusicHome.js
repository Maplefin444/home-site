import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard';
const code = new URLSearchParams(window.location.search).get('code');
export default function MusicHome () {
    if (code) return <Dashboard code={code} />
    else return <Login />
}