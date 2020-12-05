const mongoose = require('mongoose')

const { Schema } = mongoose

const movieSchema = Schema({
  title: {
    type: String,
    required: true
  },
  thumbsup: {
    type: Number,
    required: true
  },
  thumbsdown: {
    type: Number,
    required: true
  }
})

movieSchema.statics.register = async function (title, thumbsup, thumbsdown) {
  const movie = new this()
  movie.title = title
  movie.thumbsup = thumbsup
  movie.thumbsdown = thumbsdown

  await movie.save()

  return movie
}

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
