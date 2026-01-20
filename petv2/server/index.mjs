import express from 'express';
import cors from 'cors';
import { handleChat, getInitialState } from './chatLogic.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Stateless endpoint - client sends state, server returns updated state
app.post('/api/chat', (req, res) => {
  const { state, message, action } = req.body || {};

  // Use provided state or initialize fresh
  const currentState = state || getInitialState();
  
  const { reply, contentCard, options, resultsCard, updatedState } = handleChat({
    state: currentState,
    message,
    action
  });

  // Return updated state to client - server stores nothing
  res.json({
    reply,
    contentCard,
    options,
    resultsCard,
    state: updatedState || currentState
  });
});

app.listen(PORT, () => {
  console.log(`Banking chat server listening on port ${PORT}`);
});
