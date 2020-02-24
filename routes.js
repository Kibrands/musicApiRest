const cors = require('cors');
const express = require("express");
const controller = require("./controllers.js");
const router = express.Router();

// API REST CRUD

// --------------------- ARTIST

// READ ALL ARTISTS
router.get("/artists", cors(), controller.readArtists);

// READ AN ARTIST
router.get("/artists/:id", cors(), controller.readArtistById);

// DELETE ARTIST
router.delete("/artists/:id", cors(), controller.deleteArtistById);

// UPDATE ARTIST
router.put("/artists/:id", cors(), controller.updateArtistById);

// INSERT ARTIST
router.post("/artists", cors(), controller.insertArtist);

// --------------------- SONG

// READ ALL SONGS
router.get("/songs", cors(), controller.readSongs);

// READ A SONG
router.get("/songs/:id", cors(), controller.readSongById);

// READ A SONG BY ARTIST ID
router.get("/songs/artist/:artistId", cors(), controller.readSongByArtistId);

// DELETE SONG
router.delete("/songs/:id", cors(), controller.deleteSongById);

// UPDATE SONG
router.put("/songs/:id", cors(), controller.updateSongById);

// INSERT SONG
router.post("/songs", cors(), controller.insertSong);

module.exports = router;