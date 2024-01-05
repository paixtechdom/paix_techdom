import { Link } from "react-router-dom"


export const Button = ({text, link, type, bg}) => {
    return(
        <>
        {
            type == 'a' ? 
            <a href={link} className={`z-10 rounded-full h-full w-fit noBgButton ${bg} ${bg == 'bg-blue' ? 'text-white' : 'text-blue'} font-bold  bg-transparent border-blue  button px-6 py-3`}>
                {text}
            </a> :
            type== 'Link' ?
            <Link to={link} className={`z-10 rounded-full h-full w-fit noBgButton ${bg} ${bg == 'bg-blue' ? 'text-white' : 'text-blue'} font-bold  bg-transparent border-blue  button px-8 py-2`}>
                {text}
            </Link> : ''
        }

        </>
    )

 
}