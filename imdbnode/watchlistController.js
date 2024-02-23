const fs = require('fs');

class WatchlistController {
  constructor() {
    this.watchlist = [];
    this.filePath = 'storeData.json';
    this.loadWatchlist();
  }

  loadWatchlist() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      this.watchlist = JSON.parse(data);
    } catch (error) {
      console.error('Error reading watchlist file:', error.message);
    }
  }

  saveWatchlist() {
    try {
      const data = JSON.stringify(this.watchlist, null, 2);
      fs.writeFileSync(this.filePath, data, 'utf8');
    } catch (error) {
      console.error('Error writing watchlist file:', error.message);
    }
  }

  getWatchlist(req, res) {
    res.json(this.watchlist);
  }

  addToWatchlist(req, res) {
    const newMovie = req.body;
    this.watchlist.push(newMovie);
    this.saveWatchlist();
    res.json(this.watchlist);
  }

  removeFromWatchlist(req, res) {
    const id = req.params.id;
    this.watchlist = this.watchlist.filter((movie) => movie.id == id);
    this.saveWatchlist();
    res.json(this.watchlist);
  }

  
}

module.exports = new WatchlistController();
