const express = require("express");
const app = express();
const WebSocket = require("ws");

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/index.html");
});

app.listen(8080);

/**
 * 아래와 같이 선언하면 웹소켓 연결 끝.
 * 자동으로 해당 포트로 웹소켓이 연결됨.
 */
const socket = new WebSocket.Server({
  port: 8081,
});

socket.on("connection", (ws, req) => {
  ws.on("message", (msg) => {
    console.log(`유저가 보낸거 : ${msg}`);
    ws.send("ㅂㅇ");
  });
});
