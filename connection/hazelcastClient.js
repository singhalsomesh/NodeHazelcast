const { Client } = require('hazelcast-client');
const clientConfig = require('./../config/clientConfig')

let hazelcastClient;

async function connect() {
    if (!hazelcastClient) {
        hazelcastClient = await Client.newHazelcastClient(clientConfig);
        console.log("Connected to Hazelcast cluster");
    }
    return hazelcastClient;
}

module.exports = {
    connect,
    getHazelcastClient: () => hazelcastClient
};