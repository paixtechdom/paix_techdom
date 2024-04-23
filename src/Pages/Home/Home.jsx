import { AboutInfo, Gain } from '../../assets/Constants'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'
import { ImageAndText } from '../Components/ImageAndText'
import img1 from '../../assets/img/images (8).jpeg'
import { Testimonies } from './Testimonies'
import { Numbers } from './Numbers'
import { Hero } from './Hero'
import { GridSlider } from '../Components/GridSlider'

const Home = () => {
    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(0)
        document.documentElement.scrollTop = 0
    }, [])
    return(

        <>       
        <Hero />
        
        <Numbers />        

        <ImageAndText 
            id={'ahsf'} 
            title={'Get a new website now or redesign your existing website'} 
            desc={['Find out how far a beautiful website can take YOUR business']} 
            img={img1} 
            iconText={'Start Now'} 
            icon={'arrow-right'} 
            navigateTo={'contact'}
        />
    
        <GridSlider 
            data={Gain}
        />

        <ImageAndText 
            id={'secondwhikadbjcob'} 
            title={'Gain acces to free and new features now'} 
            desc={['In addition to the website built, you will have access to premium and free packages bla bla bla']} 
            img={img1} className={'flex-col-reverse lg:flex-row-reverse'} iconText={'View Packages'} 
            icon={'arrow-right'} 
            navigateTo={'pricing'}
        />
        

        {/* <Testimonies /> */}
        {/* <WeOffer />
        <Pricing /> 
        <ImageAndText id={'wrig'} title={'Client-centric approach'} desc={["Your success is our success. We prioritize understanding your unique goals and challenges, tailoring our services to suit your specific needs. Collaboration is at the heart of what we do."]} img={img2}/> */}
        {/* <RecentBlogs no={3} showReadMore={true}/> */}
        </>
    )
}

export default Home