'use stric'
require("dotenv").config();
const mongoose = require("mongoose");

class Database {
    constructor() {
        this.connect();
    }

    // connect
    connect(type = 'mongodb') {
        if(1 === 0){
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        
        mongoose
            .connect(process.env.MONGODB_URI)
            .then(() => {
                console.log("Connected to MongoDB!");
            })
            .catch((e) => {
                console.error("Did not connect to MongoDB", e);
            });
    }

    static getInstance() {
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    } 
}

const instanceMongoDB = Database.getInstance()
module.exports = instanceMongoDB;