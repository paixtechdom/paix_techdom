import { useContext, useEffect } from "react"
import { AppContext } from "../../App" 
import { PagesHero } from "../Components/PagesHero"
import image from '../../assets/img/about.jpeg'
import { Parallax } from "../../Components/Parallax"

const About = () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(1)
    }, [])
        
    return(
        <div className="flex flex-col overflow-hidden w-full pt-9">
            <PagesHero image={image} header={'About Paix Techdom'} text={'We are a digital company dedicated to ensure organizations, startups, small, medium and large size companies are equipped with the right for the online presence and activities'}/>
            

        sn;lsn;

        </div>
    )
}

export default About;