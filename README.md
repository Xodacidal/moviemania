## Movie Mania
---
### **Purpose**
This app was created as part of an application process.  Using IMDB's API, it allows users to search for a movie, find out information such as the year it was released, the directors, the cast, and a way to rate it locally.  

### **How-To**
#### ***Prerequisites***
- MongoDB
- NodeJS
- [RapidAPI IMDB API subscription](https://rapidapi.com/amrelrafie/api/movies-tvshows-data-imdb)

#### ***Installation***
Clone into the repository and install.

`$ git clone repositoryURL`

`$ npm install`

Inside client-react/src/keys, create a file named **RapidKey.js**.  Post the following inside and update with the Rapid API Key from your subscription.

> const RapidKey = 'YOUR_API_KEY'

> export default RapidKey

#### ***Usage***
In search bar, enter movie of interest.  A list will autopopulate with possible choices. Select an option and then click the More Info button to get more details about the menu.  



### **Credits**
Dustin D.

RapidAPI IMDB API

Semantic UI React
