import { useRef } from 'react';
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
    searchButton: {
        width: 'auto',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function SearchBar({ setSearchTerm }: any) {
    const inputRef = useRef<HTMLInputElement>(null);
    const classes = useStyles();

    const handleClick = () => {
        if (inputRef.current) {
          setSearchTerm(inputRef.current.value);
        }
      };

    return (
        <div className={classes.searchBar}>
            <Grid container spacing={1} >

                <Grid item xs={10}>
                    <TextField 
                        label="Keyword"
                        variant="outlined"
                        inputRef={inputRef}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={1}>
                    <Button 
                        variant="contained" 
                        className={classes.searchButton}
                        onClick={handleClick}
                    >
                        Search
                    </Button>
                </Grid>
                
            </Grid>
        </div>
    );
}
