import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('Loading...');

  useEffect(() => {
    axios.get('https://stunning-couscous-7vvqwgjv5ppvcr79v-8000.app.github.dev/')
      .then(res => setData(res.data.message))
      .catch(err => setData('Failed to connect to backend'));
  }, []);

  return (
    <div style={{ padding: '2rem', color: 'white', background: '#1a1a1a', height: '100vh' }}>
      <h1>ClearMeet AI</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
