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
        setResults(searchResults);
    }, [searchResults]);

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {results.map((result, index) => (
                <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">

                        <ListItemAvatar>
                            <Avatar src={result.thumbnailUrl} />
                        </ListItemAvatar>

                        <ListItemText
                            //there are two types of schema, use whichever field name available
                            primary={"Scientific Name: " + (result.scientificName ? result.scientificName : result.acceptedConceptName)}
                            secondary={"Common Name: " + (result.commonName ? result.commonName : result.name)}
                        />

                    </ListItem>
                    <Divider variant="inset" component="li" style={{ margin: '0 5% 0 5%' }} />
                </React.Fragment>
            ))}
        </List>
        
    );
};
