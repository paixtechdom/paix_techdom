import { Parallax } from "../../Components/Parallax"
import { GridSlider } from "../Components/GridSlider"
import { PagesHero } from "../Components/PagesHero"
import image from '../../assets/img/about.jpeg'
import { ServiceList } from "./ServiceList"
import { AppContext } from "../../App"
import { useContext, useEffect } from "react"


const Services = () =>{
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(2)
        document.documentElement.scrollTop = 0
    }, [])
   
    return(
        <div className="bg-blue-fade flex flex-col items-center  overflow-hidden pt-9">
                    
            <PagesHero image={image} header={'What we do'} text={['We are a digital company dedicated to ensure organizations, startups, small, medium and large size companies are equipped with the right for the online presence and activities', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.', 'Lorem ipsum dolor sit amet, consectetur adipisic/ing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.']} scrollTo={'servicelist'}/>

           
            <ServiceList />

        </div>

    )
}



export default Services