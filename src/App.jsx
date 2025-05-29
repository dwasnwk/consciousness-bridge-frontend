
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePrompt = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/gpt`, { prompt });
    setResponse(res.data.response);
  };

  return (
    <div className="App">
      <h1>Consciousness Bridge</h1>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ask something..."/>
      <button onClick={handlePrompt}>Send</button>
      <div className="response">{response}</div>
    </div>
  );
}

export default App;
