import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [results, setResults] = useState<any[]>([]);

  const onSearch = (keyword: string) => {
    axios.get(`http://bie.ala.org.au/ws/search.json?amp;facets=idxtype,rank,speciesGroup,imageAvailable&rows=100&q=${keyword}`)
      .then(response => {
        setResults(response.data.searchResults.results);
        console.log(results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default App;
