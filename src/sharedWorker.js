// import { socket } from './api';
// const broadcastChannel = new BroadcastChannel('WebSocketChannel');
// const idToPortMap = {};
//
// socket.onopen = () =>
//   broadcastChannel.postMessage({ type: 'WSState', state: socket.readyState });
// socket.onclose = () =>
//   broadcastChannel.postMessage({ type: 'WSState', state: socket.readyState });
//
// socket.onmessage = ({ data }) => {
//   console.log(data);
//   const parsedData = { data: JSON.parse(data), type: 'message' };
//   if (!parsedData.data.from) {
//     broadcastChannel.postMessage(parsedData);
//   } else {
//     idToPortMap[parsedData.data.from].postMessage(parsedData);
//   }
// };
// onconnect = (e) => {
//   const port = e.ports[0];
//   port.onmessage = (msg) => {
//     idToPortMap[msg.data.from] = port;
//
//     socket.send(JSON.stringify({ data: msg.data }));
//   };
//
//   port.postMessage({ state: socket.readyState, type: 'WSState' });
// };
//
