const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883', {
  clientId: 'publisher-client'
});

client.on('connect', () => {
  console.log('Publisher connected to EMQX');

  // Gửi tin nhắn
  client.publish('test/topic', 'đây là assignment thứ 2 của EMQX', () => {
    console.log('Message sent!');
    client.end(); // Ngắt kết nối sau khi gửi
  });
});
