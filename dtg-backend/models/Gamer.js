const mongoose = require('mongoose')

const gamerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
    age: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    faveGames: {
        type: [String],
        validate: [arrMin, 'choose at least 3 favorite games'],
        required: true,
    }
})

// function to set the minimum number of strings to 3 in Gamer.faveGames.type
function arrMin(val){
    return val.length >= 3
}

const Gamer = mongoose.model('Gamer', gamerSchema)

module.exports = Gamer