const router = require("express").Router();

const io = require("socket.io")(8005, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const messages = {};
router.get("/chat/:adminID/:volunteerID", (req, res) => {
  const adminID = req.params.adminID;
  const volunteerID = req.params.volunteerID;
  const room = adminID + "-" + volunteerID;
  const messagesForRoom = messages[room];
  if (messagesForRoom === undefined)
    res.status(404).json({ message: [] });
  messagesForRoom.sort((x, y) => {
    return x.time - y.time;
  });
  return res.status(200).json({ message: messagesForRoom });
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("join-room", ({ room }, callback) => {
    socket.join(room);
    // console.log(`Joined room: ${room}`);
    callback(`Joined room: ${room}`);
  });

  socket.on("message", ({ messageSent, senderID, room }) => {
    const messageObj = {
      message: messageSent,
      senderID: senderID,
      time: new Date().getTime(),
    };

    if (messages[room] === undefined) {
      messages[room] = [messageObj];
    } else {
      messages[room].push(messageObj);
    }

    socket.broadcast.to(room).emit("send-message", messageSent);
  });
});

module.exports = router;