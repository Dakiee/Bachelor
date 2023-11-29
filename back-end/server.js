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

// Text generation api
app.get("/api/race_text", async (req, res) => {
  try {
    const raceTextData = await fetch(
      "https://typeracer-1be53-default-rtdb.asia-southeast1.firebasedatabase.app/race_text.json"
    );

    const raceText = await raceTextData.json();
    const textId = Math.floor(Math.random() * raceText.length);

    const quote = raceText[textId];

    res.json(quote);
  } catch (error) {
    console.error("Error fetching race_text:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/race", async (req, res) => {
  try {
    const raceData = await fetch(
      "https://typeracer-1be53-default-rtdb.asia-southeast1.firebasedatabase.app/race.json"
    );
    const race = await raceData.json();
    const raceId = race.length;
    res.json(raceId);
  } catch (error) {
    console.error("Error fetching race:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/user_statistics", async (req, res) => {
  try {
    const userStatisticsData = await fetch(
      "https://typeracer-1be53-default-rtdb.asia-southeast1.firebasedatabase.app/user_statistics.json"
    );
    const userStatistics = await userStatisticsData.json();
    const userStatisticsId = userStatistics.length;
    res.json(userStatisticsId);
  } catch (error) {
    console.error("Error fetching user_statistics:", error);
    res.status(500).send("Internal Server Error");
  }
});

//Socket
const roomUsers = {};

io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  // socket.on("create-room", (textContent) => {
  //   const roomId = Math.random().toString(36).substring(2, 7);

  //   socket.join(roomId);

  //   roomUsers[roomId] = {
  //     textContent: textContent,
  //     users: [socket.id],
  //   };
  //   console.log(`User created and joined room ${roomId}`);

  //   io.to(roomId).emit("room-created", roomId);

  //   updateRoom(roomId);
  // });

  socket.on("create-room", (textContent) => {
    const roomId = Math.random().toString(36).substring(2, 7);

    socket.join(roomId);

    roomUsers[roomId] = {
      textContent: textContent,
      users: [{ id: socket.id, data: { progress: 0, wpm: 0, completion: 0 } }],
    };

    console.log(`Хэрэглэгч өрөө үүсгэж, ${roomId} -д нэгдсэн`);

    io.to(roomId).emit("room-created", roomId);

    updateRoom(roomId);
  });

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    console.log(roomUsers);

    if (roomUsers[roomId] == undefined) {
      console.log(roomUsers[roomId]);
      roomUsers[roomId] = { textContent: "Хоосон өрөө", users: [] };
    }

    roomUsers[roomId].users.push({
      id: socket.id,
      data: { progress: 0, wpm: 0, completion: 0 },
    });

    updateRoom(roomId);
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
      } else {
        updateRoom(room);
      }
    });
  });

  // function updateRoom(roomId) {
  //   if (roomUsers[roomId]) {
  //     const usersInRoom = roomUsers[roomId].users;

  //     usersInRoom.forEach((userId) => {
  //       io.to(userId).emit(
  //         "update-room",
  //         JSON.stringify({
  //           users: usersInRoom,
  //           textContent: roomUsers[roomId].textContent,
  //         })
  //       );
  //     });
  //   }
  // }

  function updateRoom(roomId) {
    if (roomUsers[roomId]) {
      const usersInRoom = roomUsers[roomId].users;

      usersInRoom.forEach((user) => {
        io.to(user.id).emit(
          "update-room",
          JSON.stringify({
            users: usersInRoom.map((u) => ({ id: u.id, data: u.data })),
            textContent: roomUsers[roomId].textContent,
          })
        );
      });
    }
  }
});

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on http://localhost:${PORT}`);
});
