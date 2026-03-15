interface HeaderProps {
    title: string,
    description?: string
}



export const CustomHeader = ({title, description}:HeaderProps) => {
    return(
        <header className="content-center">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </header>
    )
}