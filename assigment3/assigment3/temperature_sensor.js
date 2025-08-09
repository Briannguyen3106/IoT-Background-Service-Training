const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost: 1883')

let count = 0;
const maxMessages = 10;

client.on('connect', () => {
    console.log('Connection successful');

    const interval = setInterval(() => {
        const temp = (Math.random()*(40-30)+30).toFixed(2);
        client.publish('temperature',temp.toString(), {qos: 0});
        console.log('Published temperature: ' + temp + ' °C');

        count++;
        if (count >= maxMessages) {
            clearInterval(interval); // dừng gửi
            client.end(); // ngắt kết nối MQTT
            console.log('Stopped sending messages.');
        }
    }, 1000);

});