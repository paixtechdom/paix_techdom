import { useContext } from "react"
import { AppContext } from "../App"

export const Title = ({title, icon}) =>{
    const  { mediumScreen } = useContext(AppContext)

    return(
        <div className={`flex justify-cente text-4xl font-bol  shado-lg text-blue my-9 
        stick inset-3 top-6 p-3 py-9  ${mediumScreen ? 'w-full' : 'w-11/12'} title bg-blue-fad`}>
            <div className="flex flex-col items-center mx-9 ">

            {/* <i className={`bi bi-${icon} bg-blu rounded-full p-3 p shadow-lg`}></i> */}

            <h1 className="rounded-full m-1">{title}</h1>
            </div>
        </div>
    )
}