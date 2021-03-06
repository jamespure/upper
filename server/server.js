const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {createServer} = require('http');
const {Server} = require("socket.io")

const app = express();
app.use(cors());

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});

http.listen(process.env.PORT, () => {
  console.log("Socket is running on" + ' ' + process.env.PORT);
})