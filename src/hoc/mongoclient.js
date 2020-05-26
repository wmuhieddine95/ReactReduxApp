const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@myrestapis-3abgr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);
module.exports = {client};