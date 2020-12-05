import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

const Ratings = () => {
  const ratings = [{ title: 'Inception', thumbsup: 6, thumbsdown: 3 }, { title: 'The Dark Knight', thumbsup: 10, thumbsdown: 2 }]
  return (
    <>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>Movie Title</Grid.Column>
          <Grid.Column>Thumbs Up</Grid.Column>
          <Grid.Column>Thumbs Down</Grid.Column>
        </Grid.Row>
        {ratings.map((movie, index) => {
          return (
            <Grid.Row key={index}>
              <Grid.Column>{movie.title}</Grid.Column>
              <Grid.Column>{movie.thumbsup}</Grid.Column>
              <Grid.Column>{movie.thumbsdown}</Grid.Column>
            </Grid.Row>
          )
        })}
      </Grid>
    </>
  )
}

export default Ratings
