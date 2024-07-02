import { Link } from "react-router-dom"
import { Parallax } from "../../Components/Parallax"

export const BreadCrumbs = ({links}) => {
    return(
        <section className="w-full center mt-[8vh] lg:my-4">
            <Parallax id={`breadcrumbs`} className={'w-full center'}>

            <div className="border bg-gradient-to-l from-secondary via-primary to-secondary  border-blue-900 w-11/12 lg:w-10/12 xl:w-9/12 flex justify-start items-center p-4 pl-[20px] rounded-full">
                {
                    links.map((link, i) => (
                        i == 0 ?
                        <Link key={i} to={`/`} className="text-sm text-gray-300">
                            {link}
                            <i className={`bi bi-chevron-right mx-2`}></i>
                        </Link>  :
                        <div key={i} className="text-blue-600 cursor-pointer font-bold text-lg">
                            {link}
                        </div> 
                    ))
                }
            </div>
            </Parallax>
        </section>
    )
}