import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import { Parallax } from "../../Components/Parallax"
import { FAQ } from "../Components/FAQ"
import { BreadCrumbs } from "../Components/BreadCrumbs"
import { Helmet } from "react-helmet-async"

const PortfolioItems = [
    
]


const Portfolio = () => {

    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(3)
        document.documentElement.scrollTop = 0
    }, [])


    return(
        <>
            <Helmet>
                <title>
                    Our Projects - Paix Techdom
                </title>
            </Helmet>            
            <main id="Portfolio" className="flex-col overflow-hidden w-full pt-9 center">

                <section className="flex flex-col">

                </section>

                

                <BreadCrumbs links={['Home', 'Portfolio']}/>


            </main>




            <FAQ />

        </>
    )
    
}


export default Portfolio