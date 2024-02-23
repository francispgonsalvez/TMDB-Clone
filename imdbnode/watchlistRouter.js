const express = require('express');
const watchlistController = require('./watchlistController');

const router = express.Router();

router.get('/watchlist', (req, res) => watchlistController.getWatchlist(req, res));
router.post('/watchlist', (req, res) => watchlistController.addToWatchlist(req, res));
router.delete('/watchlist/:id', (req, res) => watchlistController.removeFromWatchlist(req, res));

module.exports = router;
