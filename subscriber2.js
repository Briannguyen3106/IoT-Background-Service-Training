const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883', {
  clientId: 'subscriber-2'
});

client.on('connect', () => {
  console.log('Subscriber 2 connected');
  client.subscribe('test/topic');
});

client.on('message', (topic, message) => {
  console.log(`Subscriber 2 received from ${topic}: ${message.toString()}`);
});
