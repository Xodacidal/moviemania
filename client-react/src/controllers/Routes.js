const Movie = require('../models/RatedMovies')
const express = require('express')
const router = express.Router()

router.post('/thumbsUp', (req, res) => {
  Movie.findOne({ title: req.body.title }, async (err, movieExists) => {
    if (err) return res.status(500).send(err)
    if (movieExists) {
      const objUpdate = {}

      objUpdate.title = req.body.title
      objUpdate.thumbsup = req.body.thumbsup + 1
      objUpdate.thumbsdown = req.body.thumbsdown

      const updates = { $set: objUpdate }

      Movie.updateOne({ title: req.body.title }, updates, (err, movie) => {
        if (err) return res.status(500).send(err)
        res.send(movie)
      })

      await Movie.register(req.body.title, 1, 0)

      res.send('New movie rated successfully.')
    }
  })
})

router.post('/thumbsDown', (req, res) => {
  Movie.findOne({ title: req.body.title }, async (err, movieExists) => {
    if (err) return res.status(500).send(err)
    if (movieExists) {
      console.log(movieExists)
      const objUpdate = {}

      objUpdate.title = req.body.title
      objUpdate.thumbsup = req.body.thumbsup
      objUpdate.thumbsdown = req.body.thumbsdown - 1

      const updates = { $set: objUpdate }

      Movie.updateOne({ title: req.body.title }, updates, (err, movie) => {
        if (err) return res.status(500).send(err)
        res.send(movie)
      })
    }
    await Movie.register(req.body.title, 1, 0)

    res.send('New movie rated successfully.')
  })
})

module.exports = router
