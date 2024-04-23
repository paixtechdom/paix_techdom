import { Prices } from "../../assets/Constants"
import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import { Parallax } from "../../Components/Parallax"
import { Link } from "react-router-dom"
import { PagesHero } from "../Components/PagesHero"
import image from '../../assets/img/about.jpeg'


const Pricing = () => {

    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(3)
        document.documentElement.scrollTop = 0
    }, [])


    return(
        <div id="Pricing" className="flex flex-col overflow-hidden w-full pt-9">
            
            <PagesHero 
                image={image} 
                header={'Pricing'} 
                text={['Explore our our packages and choose that which suits your prupose']} 
                scrollTo={'packages'} 
                button={'Explore'}
            />

            <div id="packages" className=""></div>

        </div>
    )
    
}


export default Pricing