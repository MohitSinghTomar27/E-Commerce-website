const mongoose = require('mongoose')

// db configuration
const configureDB =  () => {
    mongoose.connect('mongodb://localhost:27017/Ecommere', { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connected to database')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB
