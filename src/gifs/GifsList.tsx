import { Box, Typography } from '@mui/material';
import type {Gif} from '../gifs/interfaces/gifs.interface'



interface GifProps {
    gifs: Gif[];
}



export const GifsList = ({gifs}:GifProps) => {
    return(<>
        {/* Gifs */}
        <Box component="div" className='grid grid-cols-3 gap-4'>
            {gifs.map((gif) => (
                <Box key={gif.id} className="w-100 h-50 m-7 flex flex-col align-middle text-slate-300">
                    <img src={gif.url} alt={gif.title} className='w-full h-full object-cover rounded-md ' />
                    <Typography component="h5">{gif.title}</Typography>
                    <Typography component="p">Width: {gif.width} X Height: {gif.height}</Typography>

                </Box>
            ))}
        </Box>

    </>)
}