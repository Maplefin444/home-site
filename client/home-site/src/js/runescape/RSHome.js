import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function RSHome() {
  const [scores, setScores] = useState();

  useEffect(() => {
    if(scores) return;
    axios.post('http://localhost:3001/runescape', {}).then(res => {
      setScores(res.data.hiScore);
    })
    
  }, [scores])
  console.log(scores);
  
  return (
    <div>RSHome</div>
  )
}
