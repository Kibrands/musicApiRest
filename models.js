const mongoose = require('mongoose');

const Artist = mongoose.model('Artist', { name: String, lastName: String, nick: String });

const Song = mongoose.model('Song',
    new mongoose.Schema({ title: String, price: Number, label: String, releaseDate: Date })
);

module.exports = {
    Artist,
    Song
}