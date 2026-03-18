import { Box, Typography } from "@mui/material";

interface SearchProps {
    searchList?: string[];
    onLabelClick: (term:string) => void;
}


export const PreviousSearches = ({searchList, onLabelClick}:SearchProps) =>{
        return(<>
        <Box component="section">
            <Box component="div" className="text-center flex flex-col ">
                <Typography variant="h5">
                    Recent searches
                </Typography>
                <ul className="w-200 h-20  mx-auto flex gap-7 justify-center mt-5">
                    {searchList.map((term:string) =>(
                        (<li 
                         key={term}
                          onClick={() => onLabelClick(term)}
                          className="bg-gray-800 text-gray-500 w-18 h-8  px-3 py-1 hover:bg-gray-500 hover:text-gray-950 hover:cursor-pointer  text-center  rounded-md">
                            {term}
                        </li>)
                    ))}
                </ul>

            </Box>
            
        </Box>
        </>)

}