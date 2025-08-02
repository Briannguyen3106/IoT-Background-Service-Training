const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883', {
  clientId: 'subscriber-1'
});

client.on('connect', () => {
  console.log('Subscriber 1 connected');
  client.subscribe('test/topic');
});

client.on('message', (topic, message) => {
  console.log(`Subscriber 1 received from ${topic}: ${message.toString()}`);
});
