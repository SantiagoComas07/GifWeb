import { CustomHeader } from "./components/CustomHeader";
import { SearchBar } from "./components/SearchBar";
import {useState} from "react"
import { Box } from "@mui/material";
import "./styles/index.css";

function GifsApp() {
  const [previousTerms, setPreviousTerms] = useState(['one', ' two']);

  const example = () => {
    console.log("Hello world");
  };

  const handleSearch = (query: string = '') => {
    // Validate the query
    query = query.trim().toLowerCase();
    // Become the query to lower and delete spaces
    if(query.length === 0) return;
    // Avoid duplicate searches
    if(previousTerms.includes(query)) return;
    // Update preciousTerms
    const currentTerms= previousTerms.slice(0,6)
    currentTerms.unshift(query);
    setPreviousTerms(currentTerms)
  }

  return (
    <>
      <Box component="div" className="h-screen w-full bg-gray-700">
        {/* header */}
        <CustomHeader
          title="Gifs Store"
          description="Search your favorite gifs"
        />
        {/* searchBar */}
        <SearchBar placeholderP="Write here" onQuery={handleSearch} />
      </Box>
    </>
  );
}

export default GifsApp;
