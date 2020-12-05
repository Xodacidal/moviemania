import React, { useEffect, useContext } from 'react'
import { Search, Button, ButtonGroup } from 'semantic-ui-react'
import { SearchContext } from './contexts/SearchContext'

const Home = () => {
  const { searchResults, details, handleGetDetails, handleSearchChange, handleThumbsUp } = useContext(SearchContext)

  // useEffect(() => { console.log(details) }, [details])

  return (
    <div>
      <Search
        id='searchField'
        onSearchChange={handleSearchChange}
        results={searchResults}
        placeholder='Search'
      />
      <br />
      <Button id='searchButton' onClick={handleGetDetails}>More Info</Button>

      {details.title
        ? <div id='movieDetails'>
          <h4>{details.title} ({details.year})</h4>

          <h5>Description</h5>
          {details.description}

          <h5>Directors</h5>
          <ul>
            {details.directors.map((director, index) => {
              return (
                <li key={index}>{director}</li>
              )
            })}
          </ul>
          <h5>Cast</h5>
          <ul>
            {details.cast.map((star, index) => {
              return (
                <li key={index}>{star}</li>
              )
            })}
          </ul>
          <h5>Rate It!</h5>
          <ButtonGroup size='huge'>
            <Button icon='thumbs up outline' onClick={handleThumbsUp} />
            <Button icon='thumbs down outline' />
          </ButtonGroup>
        </div>
        : null}
    </div>
  )
}

export default Home
