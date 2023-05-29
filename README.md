# WebSocket

- http 요청은 데이터 요청, 서버가 확인 후 답변하는데 서버가 먼저 요청하는 경우는 없음. (무조건 유저가 선톡을 해야함.)
- 코인, 주식 같은 실시간 거래에서 서버에서 2초마다 보내주면서 웹페이지에서 보여주어야함. (근데 2초마다 서버에 요청하는 것은 불편하고 못생김)
- server-sent Event(서버가 유저에게 2초마다 보내줌. 단방향), WebSocket(양방향으로 유저, 서버 둘 다 원할 때 보낼 수 있음.) 을 이용해서 구현할 수 있음.

## install

express, ws 쓸 수 있는 디펜젼시 설치

```
npm install express ws
yarn add express ws
```

```
npm install
```

## server

```
node server.js
```
