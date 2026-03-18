import { Typography } from "@mui/material"

interface HeaderProps {
    title: string,
    description?: string
}



export const CustomHeader = ({title, description}:HeaderProps) => {
    return(
        <header className="w-full text-center">
            <Typography variant="h3" className="font-bold text-slate-700">{title}</Typography>
            {description && <Typography variant="h6" className="font-bold text-gray-800">{description}</Typography>}
        </header>
    )
}