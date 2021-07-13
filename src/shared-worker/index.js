import workerUrl from 'worker-plugin/loader!./sharedWorker';

const worker = new SharedWorker(workerUrl, { type: 'module' });

// sending message to sharedWorker
const postMessage = (message) => worker.port.postMessage(message);

export default {
  worker,
  postMessage
};
