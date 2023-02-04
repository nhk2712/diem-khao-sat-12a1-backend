const { MongoClient } = require('mongodb');

const USERNAME = process.env.MDB_USERNAME;
const PASSWORD = process.env.MDB_PASSWORD;
const URL = process.env.MDB_URL;

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${URL}/?retryWrites=true&w=majority`;

const Client = new MongoClient(uri);
module.exports = Client;