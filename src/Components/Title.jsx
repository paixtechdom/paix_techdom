import { useContext } from "react"
import { AppContext } from "../App"

export const Title = ({title, icon}) =>{
    const  { mediumScreen } = useContext(AppContext)

    return(
        <div className={`flex text-4xl  shado-lg text-blue my-9 pt-9  ${mediumScreen ? 'w-11/12' : 'w-9/12'} title`}>
            <div className="flex flex-col items-center ">
            <h1 className="rounded-full m-1">{title}</h1>
            </div>
        </div>
    )
}