const { Artist, Song } = require("./models.js");

// ARTIST
exports.readArtists = (req, res) => {
    Artist.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readArtistById = (req, res) => {
    Artist.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteArtistById = (req, res) => {
    Artist.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateArtistById = (req, res) => {
    Artist.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                lastName: req.body.lastName,
                nick: req.body.nick
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.insertArtist = (req, res) => {
    const artist = new Artist({
        name: req.body.name,
        lastName: req.body.lastName,
        nick: req.body.nick
    });
    artist.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

// SONG
exports.readSongs = (req, res) => {
    Song.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readSongById = (req, res) => {
    Song.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteSongById = (req, res) => {
    Song.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateSongById = (req, res) => {
    Song.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                price: req.body.price,
                label: req.body.label,
                releaseDate: req.body.releaseDate
            }
        },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.insertSong = (req, res) => {
    const song = new Song({
        title: req.body.title,
        price: req.body.price,
        label: req.body.label,
        releaseDate: req.body.releaseDate
    });
    song.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}