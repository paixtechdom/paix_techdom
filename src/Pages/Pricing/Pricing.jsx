import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import { Parallax } from "../../Components/Parallax"
import { PagesHero } from "../Components/PagesHero"
import pricing from '../../assets/img/pricing.png'
import { Packages } from "./Packages"
import { FAQ } from "../Components/FAQ"
import { BreadCrumbs } from "../Components/BreadCrumbs"


const Pricing = () => {

    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(3)
        document.documentElement.scrollTop = 0
    }, [])


    return(
        <div id="Pricing" className="flex-col overflow-hidden w-full pt-9 center">
            
            <PagesHero 
                image={pricing} 
                header={'Pricing'} 
                text={[
                    'Explore our our packages and choose that which suits your prupose',
                    "We offer range of prices for Small (Basic), Medium (Standard) and Large scale (Premium) projects, all varying based on the functionality of the websites and also based on the number or free additionals each package contains"
                ]} 
                scrollTo={'packages'} 
                button={'Explore'}
            />
            <BreadCrumbs links={['Home', 'Pricing']}/>


            <Parallax id="packages" className={'w-full center pb-[7vh] pt-[15vh]'}>
                <div  className="center w-11/12 lg:w-10/12 xl:w-9/12">
                    <Packages />
                </div>
            </Parallax>
            

            <FAQ />

        </div>
    )
    
}


export default Pricing