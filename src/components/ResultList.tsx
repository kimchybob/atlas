import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export default function ResultList({searchResults}: any) {
    const [results, setResults] = useState<any[]>(searchResults);

    useEffect(() => {
        // Update the local state when props change
        setResults(searchResults);
    }, [searchResults]); // Run this effect whenever searchResults changes

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {results.map((result, index) => (
                <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">

                        <ListItemAvatar>
                            <Avatar src={result.imageUrl} />
                        </ListItemAvatar>

                        <ListItemText
                            //there are two types of schema
                            primary={"Scientific Name: " + (result.scientificName ? result.scientificName : result.acceptedConceptName)}
                            secondary={"Common Name: " + (result.commonName ? result.commonName : result.name)}
                        />

                    </ListItem>
                    {index !== results.length - 1 && <Divider variant="inset" component="li" style={{ margin: '0 5% 0 5%' }} />}
                </React.Fragment>
            ))}
        </List>
        
    );
};
