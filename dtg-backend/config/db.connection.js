const mongoose = require('mongoose')

// == connection string ==
const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/dtgDB'

// == set up connection ==

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

// == connection updates ==

mongoose.connection.on('connected', () => console.log('Mongodb connected 😊'))

mongoose.connection.on('error', (error) => console.log('Mongodb error', error))

mongoose.connection.on('disconnected', ()=> console.log('Mongodb disconnected 😢'))