const mongoose = require('mongoose')

function connect() {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('User Service connected to db');
    }).catch(err => {
        console.log(err);
    })
}

module.exports = connect;