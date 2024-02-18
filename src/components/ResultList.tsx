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
        <List>
            {results.map((result, index) => (
                <React.Fragment key={index}>
                    <ListItem alignItems="flex-start" >

                        <ListItemText
                            //there are two types of schema, use whichever field name available
                            primary={"Scientific Name: " + (result.scientificName ? result.scientificName : result.acceptedConceptName)}
                            secondary={"Common Name: " + (result.commonName ? result.commonName : result.name)}
                        />

                        <ListItemAvatar>
                            <Avatar 
                                src={result.thumbnailUrl} 
                                style={{ width: 'auto', height: '100px' }} //use style to overwrite default css
                                variant="square"/>
                        </ListItemAvatar>

                    </ListItem>
                    <Divider variant="inset" component="li" style={{ margin: '0' }} />
                </React.Fragment>
            ))}
        </List>  
    );
};
