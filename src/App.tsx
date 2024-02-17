import './App.css';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [startOffset, setStartOffset] = useState<number>(0);

  const [results, setResults] = useState<any[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [curPage, setCurPage] = useState<number>(1);


  /*
  action of page select behavior
  */
  useEffect(() => {
    if(searchTerm){
      refresh();
    }
  }, [curPage]); 


  /*
  action of search behavior
  searchTerm will only be updated by search button's onClick event
  */
  useEffect(() => {
    //clear result display from previous search
    setResults([]);
    setTotalRecords(0);
    
    //only call api when a keyword is inputed
    if(searchTerm){
      if(curPage > 1){
        setCurPage(1); //refresh will be involked by useEffect of curPage, to avoid twice render
        setStartOffset(0); 
      }
      else  refresh();
    }
  }, [searchTerm]); 


  const refresh = () => {
      axios.get(`http://bie.ala.org.au/ws/search.json?sort=scientificName&dir=desc&q=${searchTerm}&start=${startOffset}`)
      .then(response => {
        setResults(response.data?.searchResults?.results);
        setTotalRecords(response.data?.searchResults?.totalRecords);
        console.log(response.data);
        console.log(curPage);
      })
      .catch(error => {
        console.error(error);
      });
  };


  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurPage(value);
    setStartOffset((value-1)*10);
    console.log(value);
  };

  return (
    <div className="App">
      <SearchBar setSearchTerm={setSearchTerm}/>
      {
        //only display download button, result list and pagination when there is searching result
        totalRecords > 0 &&
        <div>
          <Button variant="contained" >Download</Button>
          <ResultList searchResults={results}/>
          <Pagination 
            className="pagination" 
            //since the api call will return 10 records by default, calculate max page number based on totalRecords
            count={Math.floor(totalRecords/10) + (totalRecords%10 == 0 ? 0 : 1)} 
            page={curPage}
            onChange={handlePageChange}/>
        </div>
      }
    </div>
  );
}

export default App;
