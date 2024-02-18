import { FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    searchBar:{
        justifyContent: 'center',
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
    const classes = useStyles();

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const keywordInput = event.currentTarget.elements.namedItem(
            'keywordInput'
        ) as HTMLInputElement;
        setSearchTerm(keywordInput.value);
      };

    return (
        <form onSubmit={handleSearch} className={classes.searchBar}>
            <Grid container spacing={1} >

                <Grid item xs={10}>
                    <TextField 
                        label="Keyword"
                        variant="outlined"
                        id="keywordInput"
                        type="text"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={1}>
                    <Button 
                        variant="contained" 
                        className={classes.searchButton}
                        type="submit"
                    >
                        Search
                    </Button>
                </Grid>

            </Grid>
        </form>
        
    );
}
