import { Box, Button, TextField } from '@mui/material';
import {useEffect, useState} from 'react';


interface SearchProps {
    placeholderP: string,
    onQuery: (query:string) => void
}



export const SearchBar = ({placeholderP, onQuery}: SearchProps) => {
    const [query, setQuery] = useState('');

    useEffect(() =>{
        // Here I state the act over the query in a specific time
        const timeOut = setTimeout(()=>{
            onQuery(query)
        }, 700);
        // This is the result returning
        return()=>{
            clearTimeout(timeOut)
        }
    }, [onQuery, query])

    const handleSearch = () => {
        onQuery(query)
        setQuery('');
    }

    return(<>
        <Box component="div" className="w-100 h-20 mx-auto flex gap-3 p-2  justify-center items-center ">
            <TextField 
            type="text"
            variant='outlined'
            className="py-1 px-2  rounded-sm bg-gray-700"
            sx={{
                "& .MuiInputBase-input": {
                 color: "#ffffff", 
                },}}
            placeholder={placeholderP}
            value = {query}
            onChange= {(event) => setQuery(event.target.value)}
             
            />
            <Button variant="contained"
            onClick={handleSearch}
            className="w-22 h-11  px-3"
            >
            Search
            </Button>

        </Box>
    </>)
}