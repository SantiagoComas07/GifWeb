import { Box, Typography } from '@mui/material';
import type {Gif} from '../mock_gifs/gifs.mock'



interface GifProps {
    gifs: Gif[];
}



export const GifsList = ({gifs}:GifProps) => {
    return(<>
        {/* Gifs */}
        <Box component="div" className='grid grid-cols-3 gap-4'>
            {gifs.map((gif) => (
                <Box key={gif.id} className="w-100 h-50 m-7 rounded-md flex flex-col align-middle text-slate-300">
                    <img src={gif.url} alt={gif.title} className='w-full h-full object-cover' />
                    <Typography component="h5">{gif.title}</Typography>
                    <Typography component="p">Width: {gif.width} X Height: {gif.height}</Typography>

                </Box>
            ))}
        </Box>

    </>)
}