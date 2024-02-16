import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function App() {
  const [results, setResults] = useState<any[]>([]);

  const onSearch = (keyword: string) => {
    axios.get(`http://bie.ala.org.au/ws/search.json?q=${keyword}`)
      .then(response => {
        setResults(response.data?.searchResults?.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <Button variant="contained" >Download</Button>
      <ResultList searchResults={results}/>
    </div>
  );
}

export default App;
