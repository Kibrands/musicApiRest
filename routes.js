const cors = require('cors');
const express = require("express");
const controller = require("./controllers.js");
const router = express.Router();

// API REST CRUD

// --------------------- ARTIST

// READ ALL ARTISTS
router.get("/artists", cors(), controller.readArtists);

// READ AN ARTIST
router.get("/artists/:id", (req, res) => {
    Artist.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// DELETE ARTIST
router.delete("/artists/:id", (req, res) => {
    Artist.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// UPDATE ARTIST
router.put("/artists/:id", (req, res) => {
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
});

// INSERT ARTIST
router.post("/artists", (req, res) => {
    const artist = new Artist({
        name: req.body.name,
        lastName: req.body.lastName,
        nick: req.body.nick
    });
    artist.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// --------------------- SONG

// READ ALL SONGS
router.get("/songs", (req, res) => {
    Song.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// READ A SONG
router.get("/songs/:id", (req, res) => {
    Song.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// DELETE SONG
router.delete("/songs/:id", (req, res) => {
    Song.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// UPDATE SONG
router.put("/songs/:id", (req, res) => {
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
});

// INSERT SONG
router.post("/songs", (req, res) => {
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
});
module.exports = router;