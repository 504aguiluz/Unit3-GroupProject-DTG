const mongoose = require('mongoose')

// == connection string ==
const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/dtgDB'

// == set up connection ==

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

// == connection updates ==

mongoose.connection.on('connected', () => console.log('mongodb connected and happy'))

mongoose.connection.on('error', (error) => console.log('mongodb error', error))

mongoose.connection.on('disconnected', ()=> console.log('mongodb disconnected and sad'))