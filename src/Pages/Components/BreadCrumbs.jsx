import { Link } from "react-router-dom"
import { Parallax } from "../../Components/Parallax"

export const BreadCrumbs = ({links}) => {
    return(
        <div className="w-full center mt-[8vh] lg:my-4">
            <Parallax id={`breadcrumbs`} className={'w-full center'}>

            <div className="border  border-blue-900 w-11/12 lg:w-10/12 xl:w-9/12 flex justify-start items-center p-3 pl-[20px] rounded-full">
                {
                    links.map((link, i) => (
                        i == 0 ?
                        <Link to={`/`} className="text-sm text-gray-300">
                            {link}
                            <i className={`bi bi-chevron-right mx-2`}></i>
                        </Link>  :
                        <div className="text-blue-600 cursor-pointer">
                            {link}
                        </div> 
                    ))
                }
            </div>
            </Parallax>
        </div>
    )
}