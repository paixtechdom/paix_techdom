import { useContext, useEffect } from "react"
import { AppContext } from "../../App" 
import { PagesHero } from "../Components/PagesHero"
import image from '../../assets/img/about.jpeg'
import lady from '../../assets/img/lady 2.png'
import { Parallax } from "../../Components/Parallax"
import { ImageAndText } from "../Components/ImageAndText"
import { Values } from "./Values"
import { FAQ } from "../Components/FAQ"

const About = () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(1)
        document.documentElement.scrollTop = 0
    }, [])
        /* 
            share business story and history and provide deeper connection with customers
            facilitates trust, form an emotional connection
            why the business was founded
            values, mission, beliefs and vision
            answer questions customers may have about the business
        */
    return(
        <div className="flex flex-col overflow-hidden w-full pt-9">
            <PagesHero image={image} header={'About Paix Techdom'} text={['We are a digital company dedicated to ensure organizations, startups, small, medium and large size companies are equipped with the right for the online presence and activities', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.', 'Lorem ipsum dolor sit amet, consectetur adipisic/ing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.']} scrollTo={'Values'}/>
            
            <Values />
                

            <ImageAndText img={image} title={'Our Story'} desc={['WHY PAIX TECHDOM WAS FOUNDED Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.', 'THIS WILL ALSO CONTAIN OUR BELIEF']} id={'sfndjbgslsnlk'} iconText={'Learn more'} className={'flex-col-reverse lg:flex-row-reverse'} icon={'arrow-down'} scrollTo={'ourvision'}/>
            
            <ImageAndText img={image} title={'Our Vision'} desc={['We aim to be a top leading Tech Company worldwide, providing endless robust and innovative solutions to all']} id={'ourvision'} iconText={'Learn more'}  className={'flex-col-reverse lg:flex-row'} icon={'arrow-down'} scrollTo={'ourmission'}/>

            <ImageAndText img={image} title={'Our Mission'} desc={['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, consectetur, laudantium veritatis ratione quo eius maiores mollitia nam repellat illo recusandae saepe accusantium ipsum nihil excepturi inventore, quae modi dignissimos.']} id={'ourmission'} iconText={'Learn more'} className={'flex-col-reverse lg:flex-row-reverse'} icon={'arrow-down'} scrollTo={'FAQ'}/>

            <FAQ />


        </div>
    )
}

export default About;