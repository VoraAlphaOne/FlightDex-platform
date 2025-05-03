import { useState } from 'react';
import Layout from '../components/Layout';

export default function Vora() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      if (input.includes('logbook')) setReply('Opening your logbook...');
      else if (input.includes('mission')) setReply('Locating nearby missions...');
      else setReply('I am here, Cloud. Let’s navigate your path.');
      setInput('');
    }
  };

  return (
    <Layout>
      <h2>Vora Assistant</h2>
      <input placeholder="Ask Vora..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey} />
      <p>{reply}</p>
    </Layout>
  );
}