const { Artist, Song } = require("./models.js");

exports.readArtists = (req, res) => {
    Artist.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}