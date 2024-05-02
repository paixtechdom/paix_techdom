import { PagesHero } from "../Components/PagesHero"
import services from '../../assets/img/services.png'
import { ServiceList } from "./ServiceList"
import { AppContext } from "../../App"
import { useContext, useEffect } from "react"
import { FAQ } from "../Components/FAQ"
import { BreadCrumbs } from "../Components/BreadCrumbs"


const Services = () =>{
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(2)
        document.documentElement.scrollTop = 0
    }, [])
   
    return(
        <div className="bg-blue-fade flex flex-col items-center  overflow-hidden pt-9">
                    
            <PagesHero 
                image={services} 
                header={'What we do'} 
                text={['Our services page showcases our commitment to equipping organizations, startups, and companies of all sizes with the right tools and solutions for their online presence and activities. In this image, the digital toolbox represents the comprehensive range of digital services we offer, tailored to meet the unique needs of each client.',
                ' From website development to online marketing strategies, we empower businesses to thrive in the digital age and achieve their goals with confidence.']} 
                scrollTo={'servicelist'}
            />

            <BreadCrumbs links={['Home', 'Our Services']}/>

           
            <ServiceList />

            <FAQ />


        </div>

    )
}



export default Services