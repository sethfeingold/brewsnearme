import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import List from './components/List';

function App() {

  const [breweries, setBreweries] = useState([]);
  const [zip, setZip] = useState(null);


  useEffect(()=>{
      fetch('https://sandbox-api.brewerydb.com/v2/beers/?key=85b50b8c5b44afc6aa05b27367c1121f')
        .then(response => response.json())
        .then(data => setBreweries(data.data));
  });


  return (
    <div className="App">
      <Header />
      <SearchBar text="Enter your zip code" zip={zip} setZip={setZip}/>
      <List>
        {breweries.map(brewery =>
          <p>{brewery.name}</p>
        )}
      </List>
    </div>
  );
}

export default App;
