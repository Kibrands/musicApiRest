const mongoose = require('mongoose');

const Artist = mongoose.model('Artist',
    new mongoose.Schema({ name: String, lastName: String, nick: String, image: String })
);

const Song = mongoose.model('Song',
    new mongoose.Schema({ title: String, price: Number, label: String, releaseDate: Date, cover: String, artistId: String })
);

module.exports = {
    Artist,
    Song
}