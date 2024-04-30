import { useContext, useEffect } from "react"
import { AppContext } from "../../App" 
import { PagesHero } from "../Components/PagesHero"
import image from '../../assets/img/about.jpeg'
import lady from '../../assets/img/lady 2.png'
import { Parallax } from "../../Components/Parallax"
import { ImageAndText } from "../Components/ImageAndText"
import { Values } from "./Values"
import { BreadCrumbs } from "../Components/BreadCrumbs"

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
            <PagesHero 
                image={image} 
                header={'About Paix Techdom'} 
                text={[
                    'We are a digital company dedicated to ensuring you as an organization, startup, small, medium and large size company are equipped with the right website for growing awareness generating and nurturing leads. ',
                    'We are also devoted to developing custom website which serves various purposes based on your preference, need and problem to be solved.']} 
                scrollTo={'Values'}/>
                <BreadCrumbs links={['Home', 'About Us']}/>
            
            <Values />
                

            <ImageAndText 
                img={image} 
                title={'Our Story'} 
                desc={[
                    'Paix Techdom was born out of the desire and passion to equip you as an organization, startup, small, medium or large size company with one of the critical tools for thriving not only digitally but in our physical world.',
                    
                   'We believe in your dreams and goals and we are ready to contribute our all to bringing such dreams to life and achieving such goals'
                ]} 
                id={'sfndjbgslsnlk'} 
                iconText={'Learn more'} 
                icon={'arrow-down'} 
                scrollTo={'ourvision'}
                />
                
            <ImageAndText 
                img={image} 
                title={'Our Vision'} 
                desc={[
                    'We aim to be a top leading Tech Company worldwide, providing endless robust and innovative solutions to all'
                ]} 
                id={'ourvision'} 
                iconText={'Learn more'}  
                className={'flex-col-reverse lg:flex-row-reverse'} 
                icon={'arrow-down'} 
                scrollTo={'ourmission'}
            />

            <ImageAndText 
                img={image} 
                title={'Our Mission'} 
                desc={[
                    'To equip organizations, startups, small, medium and large size companies with digital solutions needed to scale up, optimize and automate their business'
                ]} 
                id={'ourmission'} 
                iconText={'Learn more'} c
                lassName={'flex-col-reverse  lg:flex-row-reverse'} 
                icon={'arrow-down'} 
                scrollTo={'FAQ'}
            />



        </div>
    )
}

export default About;