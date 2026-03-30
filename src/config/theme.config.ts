import {createTheme} from "@mui/material/styles"
import '@fontsource/arimo/700.css';

export const theme =createTheme({
    palette:{
    
        primary: {
            main:"#023054",
        },
        secondary:{
            main: "#2e303a",
        }
    },
    typography:{
        fontFamily: 'Arimo, sans-serif',
    }
})


export default theme;