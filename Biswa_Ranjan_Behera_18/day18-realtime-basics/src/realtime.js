export const channel = new BroadcastChannel("realtime-demo");

export function send(event) {
  channel.postMessage({
    ...event,
    time: new Date().toLocaleTimeString(),
  });
}

export function listen(callback) {
  channel.onmessage = (e) => callback(e.data);
}
