import { CustomHeader } from "./components/CustomHeader";
import { SearchBar } from "./components/SearchBar";
import {useState} from "react"
import { Box } from "@mui/material";
import "./styles/index.css";
import { PreviousSearches } from "./gifs/PreviousSearches";
// import { mockGifs } from "./mock_gifs/gifs.mock";
import { GifsList } from "./gifs/GifsList";
import { getGifsByQuery } from "./gifs/actions/get_gif.actions";
import type { Gif } from "./gifs/interfaces/gifs.interface";

function GifsApp() {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleSuggestClicked = (term:string) =>{
    console.log({term})
  }

  const handleSearch = async(query: string) => {
    // Validate the query
    query = query.trim().toLowerCase();
    // Become the query to lower and delete spaces
    if(query.length === 0) return;
    // Avoid duplicate searches
    if(previousTerms.includes(query)) return;
    // Update preciousTerms
    // const currentTerms= previousTerms.slice(0,8)
    // currentTerms.unshift(query);  add in the first position
    // setPreviousTerms(currentTerms)

    setPreviousTerms([query, ...previousTerms].splice(0,8))

    const gifs = await getGifsByQuery(query)
  
    console.log({gifs})
    setGifs(gifs)

    return gifs

  
  }

// const gifContent = async(query:string) =>{
//   try{
//     const gifs = await getGifsByQuery(query)
//     return gifs
//   }catch(error){
//     console.log(error)
//   }

// }




  return (
    <>
      <Box component="div" className="min-h-screen w-full p-7 bg-slate-950">
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
        <GifsList gifs={gifs}/>

      </Box>
    </>
  );
}

export default GifsApp;
