const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost: 1883');

client.on('connect',() => {
    console.log('Subscriber connected to broker');
    client.subscribe('temperature', (err) => {
        if (!err) {
            console.log('Subscribed to temperature');
        }
    });
});

client.on('message', (topic, message) =>{
    const temp = parseFloat(message.toString());
    console.log(`Received temperature: ${temp}°C`);

    if (temp > 36) {
        console.log(`⚠️ The temperature is too high (${temp}°C)`);
    }
});