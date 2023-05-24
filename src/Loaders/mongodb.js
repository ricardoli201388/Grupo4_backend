const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://ricardoli:zWV2GSVEdsTd33XM@grupo4backend.b0tz4kc.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = startDB; 