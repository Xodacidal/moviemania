import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Ratings from './Ratings'
import SearchContextProvider from './contexts/SearchContext'
import 'semantic-ui-css/semantic.min.css'
import { Image } from 'semantic-ui-react'
import backgroundImage from './media/popcorn.png'

class App extends Component {
  state = {}

  render () {
    return (
      <SearchContextProvider>
        <div id='main' 
          style={{
            // backgroundColor: 'black',
            backgroundImage: `url('${backgroundImage}')`,
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
            color: 'white', 
            minHeight: '100vh',
            padding: '40px'
          }}
        >
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.80)', 
            color: 'black', 
            margin: '0 auto', 
            width: '85%', 
            border: '2px solid black', 
            borderRadius: '10px', 
            padding: '2%'
            }}
          >
            <Router>
              <Link to='/'>Home</Link> | <Link to='/ratings'>Ratings</Link>
              <h2>Movie Mania</h2>
              <Switch>
                <Route exact path='/ratings'>
                  <Ratings />
                </Route>
                <Route exact path='/'>
                  <Home />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </SearchContextProvider>
    )
  }
}

export default App
