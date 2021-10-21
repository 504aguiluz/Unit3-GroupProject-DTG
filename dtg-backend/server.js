const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003

const routes = require('./routes')
app.use(express.json())

// CORS //
const cors = require('cors')

const whitelist = ['http://localhost:3000', 'Heroku Frontend URL HERE']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))

require('./config/db.connection')

app.get('/', (req, res) => {
    res.send('Route connected')
})

// ROUTES //
app.use('/gamers', routes.gamers)
app.use('/users', routes.user)

app.listen(PORT, () => {
    console.log(`🎮 Watching you play games on port: ${PORT}`)
})
