const API_KEY =
  '38a228cc75485f4842616b894785e9350b9aa1fbf5eb55435f5e2e41bb750428';

export const tickersHandlers = new Map();

export const socket = new WebSocket(
  `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`
);

const AGGREGATE_INDEX = '5';
const browserInstances = [];

socket.onmessage = (e) => {
  const { TYPE: type, FROMSYMBOL: currency, PRICE: newPrice } = JSON.parse(
    e.data
  );
  if (type !== AGGREGATE_INDEX || newPrice === undefined) {
    return;
  }
  const handlers = tickersHandlers.get(currency) ?? [];
  handlers.forEach((fn) => fn(newPrice));
};

//sharedWorker connect
self.onconnect = (e) => {
  const port = e.ports[0];
  browserInstances.push(port);
  port.onmessage = (e) => {
    browserInstances.map((instance) => {
      instance.postMessage(e.data);
    });
  };
};
