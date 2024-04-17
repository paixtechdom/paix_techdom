import hero from '../../assets/img/hero.png'
import { AboutInfo } from '../../assets/Constants'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'
import { ImageAndText } from '../../Components/ImageAndText'
import { WeOffer } from './WeOffer'
import { Pricing } from '../Pricing/Pricing'
import { Gain } from './Gain'
import img1 from '../../assets/img/images (8).jpeg'
import img2 from '../../assets/img/client-portal.png'
import { Testimonies } from './Testimonies'
import { RecentBlogs } from '../Blog/RecentBlogs'
import { Numbers } from './Numbers'
import { Hero } from './Hero'

const Home = () => {
    const { setShowNavBar } = useContext(AppContext)

    

 
    return(

        <>
        
        
        <Hero />
        <Numbers />

        
        <ImageAndText id={'ahsf'} title={'Find out how far a beautiful website can take YOUR business'} desc={'Your success is our success. We prioritize understanding your unique goals and challenges, tailoring our services to suit your specific needs. Collaboration is at the heart of what we do.'} img={img1}/>

        <div id='About' className='section flex flex-col items-center'>
            <Gain AboutInfo={AboutInfo}/>
            

        </div>

        <ImageAndText id={'secondwhikadbjcob'} title={' Get a new website now or create a new design for YOUR existing website'} desc={'You will have access to premium and free packages bla bla bla'} img={img1}/>

        {/* <WeOffer />
        <Testimonies />
        <Pricing /> 
        <ImageAndText id={'wrig'} title={'Client-centric approach'} desc={"Your success is our success. We prioritize understanding your unique goals and challenges, tailoring our services to suit your specific needs. Collaboration is at the heart of what we do."} img={img2}/> */}
        {/* <RecentBlogs no={3} showReadMore={true}/> */}
        </>
    )
}

export default Home