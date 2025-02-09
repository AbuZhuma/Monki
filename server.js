const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
require('dotenv').config();

const todo = require('./src/routes/todo');
const users = require("./src/routes/users")
const chat = require("./src/routes/chat")

const rateLimit = require('express-rate-limit');
const GlobalMessage = require('./src/models/chat');
const generateRandomID = require('./src/helpers/genIdH');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  keyGenerator: (req, res) => req.clientIp,
});

app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const dbURI = process.env.MONGO_URI;

mongoose
  .connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/tasks/', todo);
app.use('/api/users/', users)
app.use('/api/chat/', chat)

const clients = [];
wss.on('connection', (ws) => {
  clients.push(ws);

  ws.on('message', async(message) => {
    let newMsg = new GlobalMessage(JSON.parse(message))
    let id = await generateRandomID(10)
    newMsg.id = id
    newMsg.save()
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

ws.on('close', () => {
    // console.log('Client disconnected');

    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });

});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});