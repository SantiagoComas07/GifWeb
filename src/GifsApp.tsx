import { CustomHeader } from "./components/CustomHeader";
import { SearchBar } from "./components/SearchBar";
import {useState} from "react"
import { Box } from "@mui/material";
import "./styles/index.css";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { mockGifs } from "./mock_gifs/gifs.mock";
import { GifsList } from "./gifs/GifsList";

function GifsApp() {
  const [previousTerms, setPreviousTerms] = useState(['one', ' two']);


  const handleSuggestClicked = (term:string) =>{
    console.log({term})
  }

  const handleSearch = (query: string = '') => {
    // Validate the query
    query = query.trim().toLowerCase();
    // Become the query to lower and delete spaces
    if(query.length === 0) return;
    // Avoid duplicate searches
    if(previousTerms.includes(query)) return;
    // Update preciousTerms
    const currentTerms= previousTerms.slice(0,8)
    currentTerms.unshift(query);
    setPreviousTerms(currentTerms)
  }

  return (
    <>
      <Box component="div" className="h-full w-full p-5 bg-slate-950">
        {/* header */}
        <CustomHeader
          title="Gifs Store"
          description="Search your favorite gifs"
        />
        {/* searchBar */}
        <SearchBar placeholderP="Write here" onQuery={handleSearch} />

        {/*preciousSearches*/}
        <PreviousSearches searchList={previousTerms} onLabelClick={handleSuggestClicked}/>

        {/* Gifs */}
        <GifsList gifs={mockGifs}/>

      </Box>
    </>
  );
}

export default GifsApp;
