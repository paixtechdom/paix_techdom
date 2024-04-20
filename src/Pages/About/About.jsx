import { useContext, useEffect } from "react"
import { AppContext } from "../../App" 
import { PagesHero } from "../Components/PagesHero"
import image from '../../assets/img/about.jpeg'
import { Parallax } from "../../Components/Parallax"
import { ImageAndText } from "../Components/ImageAndText"
import { Values } from "./Values"

const About = () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(1)
    }, [])
        /* 
            share business story and history and provide deeper connection with customers
            the team behind the brand
            facilitates trust, form an emotional connection
            why the business was founded
            values, mission, beliefs and vision
            answer questions customers may have about the business
        */
    return(
        <div className="flex flex-col overflow-hidden w-full pt-9">
            {/* <PagesHero image={image} header={'About Paix Techdom'} text={['We are a digital company dedicated to ensure organizations, startups, small, medium and large size companies are equipped with the right for the online presence and activities', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.']}/> */}
            
            <Values />
                

            <ImageAndText img={image} title={'Our Story'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.'} id={'sfndjbgslsnlk'} iconText={'Learn more'} className={'flex-col-reverse lg:flex-row-reverse'} />
            
            <ImageAndText img={image} title={'Our Vision, Mission'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.'} id={'sfnlsnlk'} iconText={'Learn more'}  />



        </div>
    )
}

export default About;