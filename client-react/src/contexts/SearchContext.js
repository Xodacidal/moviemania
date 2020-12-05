import React, { Component, createContext } from 'react'
import RapidKey from '../keys/RapidKey'

export const SearchContext = createContext()

class SearchContextProvider extends Component {
  state = {
    searchInput: '',
    searchResults: [],
    details: {
      title: '',
      directors: [],
      year: '',
      description: '',
      cast: [],
      thumbsUp: 0,
      thumbsDown: 0
    }
  }

  handleThumbsUp = () => {
      fetch('/thumbsUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          title: this.state.details.title
        }
      })
      .then(response => response.json)
  }

  handleThumbsDown = () => {
    fetch('/thumbsDown', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        title: this.state.details.title
      }
    })
    .then(response => response.json)
  }

  handleSearchChange = () => {
    let searchField = ''
    searchField = document.getElementById('searchField').value

    this.setState({
      searchInput: searchField
    }, () => {
      fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?title=${searchField}&type=get-movies-by-title`, {
	      "method": "GET",
	      "headers": {
		      "x-rapidapi-key": RapidKey,
		      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
	      }
      })
      .then( response => response.json() )
      .then( data => {
        console.log(data.movie_results, "this is data, maybe")
        this.setState({ searchResults: [] }, () => { 
          this.setState({ searchResults: data.movie_results }, () => {
            console.log(this.state.searchResults)
          })
        })
      })
    })
  }

  handleGetDetails = () => {
    console.log('handleGetDetails ran')
    // event.preventDefault()
    fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=${this.state.searchResults[0].imdb_id}&type=get-movie-details`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": RapidKey,
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
      }
    })
    .then( response => response.json() )
    .then( data => {
      console.log(data)
      this.setState({
        details: {
          title: data.title,
          directors: data.directors,
          year: data.year,
          description: data.description,
          cast: data.stars
        }
      }, () => { console.log(this.state) })
    })

  }

  render() { 
    return ( 
      <SearchContext.Provider value={{...this.state, handleThumbsUp: this.handleThumbsUp, handleThumbsDown: this.handleThumbsDown, handleSearchChange: this.handleSearchChange, handleGetDetails: this.handleGetDetails}}>
        {this.props.children}
      </SearchContext.Provider>
     );
  }
}

export default SearchContextProvider
