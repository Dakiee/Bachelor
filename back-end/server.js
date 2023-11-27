const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: "*",
  },
});

const roomUsers = {};

io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  socket.on("create-room", (textId) => {
    const roomId = Math.random().toString(36).substring(2, 7);

    socket.join(roomId);

    roomUsers[roomId] = {
      textId: textId,
      users: [],
    };
    roomUsers[roomId].users.push(socket.id);
    console.log(`User created and joined room ${roomId}`);

    io.to(roomId).emit("room-created", roomId);
    console.log(roomUsers);
  });

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    console.log(roomUsers);

    if (!roomUsers[roomId]) {
      roomUsers[roomId] = { textId: 0, users: [] };
    }

    roomUsers[roomId].users.push(socket.id);

    io.to(roomId).emit(
      "room-joined",
      roomUsers[roomId].users.length,
      roomUsers[roomId].textId
    );

    console.log(`${roomId} өрөөнийхөн ${roomUsers[roomId].users}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    Object.keys(roomUsers).forEach((room) => {
      roomUsers[room].users = roomUsers[room].users.filter(
        (user) => user !== socket.id
      );
      console.log(
        `Users in room ${room} after disconnect:`,
        roomUsers[room].users
      );

      if (roomUsers[room].users.length === 0) {
        delete roomUsers[room];
      }
    });
  });
});

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on http://localhost:${PORT}`);
});
