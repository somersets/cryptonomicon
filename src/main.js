import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import './api';
// import { v4 as uuidv4 } from 'uuid';

createApp(App).mount('#app');

// export const worker = new SharedWorker('sharedWorker.js');
//
// const id = uuidv4();
//
// let webSocketState = WebSocket.CONNECTING;
// console.log(`Initializing the web worker for user: ${id}`);
//
// worker.port.start();
//
// worker.port.onmessage = (event) => {
//   switch (event.data.type) {
//     case 'WSState':
//       webSocketState = event.data.state;
//       break;
//     case 'message':
//       handleMessageFromPort(event.data);
//       break;
//   }
// };
//
// const broadcastChannel = new BroadcastChannel('WebSocketChannel');
// broadcastChannel.addEventListener('message', (event) => {
//   switch (event.data.type) {
//     case 'WSState':
//       webSocketState = event.data.state;
//       break;
//     case 'message':
//       handleBroadcast(event.data);
//       break;
//   }
// });
//
// // Listen to broadcasts from server
// function handleBroadcast(data) {
//   console.log('This message is meant for everyone!');
//   console.log(data);
// }
//
// // Handle event only meant for this tab
// function handleMessageFromPort(data) {
//   console.log(`This message is meant only for user with id: ${id}`);
//   console.log(data);
// }
//
// // Use this method to send data to the server.
// function postMessageToWSServer(input) {
//   if (webSocketState === WebSocket.CONNECTING) {
//     console.log('Still connecting to the server, try again later!');
//   } else if (
//     webSocketState === WebSocket.CLOSING ||
//     webSocketState === WebSocket.CLOSED
//   ) {
//     console.log('Connection Closed!');
//   } else {
//     worker.port.postMessage({
//       // Include the sender information as a uuid to get back the response
//       from: id,
//       data: input
//     });
//   }
// }
// // Sent a message to server after approx 2.5 sec. This will
// // give enough time to web socket connection to be created.
// setTimeout(() => postMessageToWSServer('Initial message'), 2500);
