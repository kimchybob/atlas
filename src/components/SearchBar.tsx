import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    searchBar:{
        justifyContent: 'center', /* Center horizontally */
        alignItems: 'center',
        margin: "5%"
    },
    input:{
        // width: '100%',
        // height: '100%',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    searchButton: {
        width: 'auto',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

// interface Props {
//     onSearch: (term: string) => void;
// }

export default function SearchBar({ onSearch }: any) {
    const classes = useStyles();

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm)
        console.log(searchTerm)
    }

    return (
        <div className={classes.searchBar}>
            <Grid container spacing={1} >
                <Grid item xs={10}>
                    <TextField 
                        label="Keyword"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={1}>
                    <Button 
                        variant="contained" 
                        className={classes.searchButton}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
