import { Gain } from '../../assets/Constants'
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
import { Steps } from './Steps'

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
            title={'Start now to scale up your digital awareness'} 
            desc={['Get a new website now or redesign your existing website, scale up your awareness, generate nore leads and increase your revenue']} 
            img={img1} 
            iconText={'Start Now'} 
            icon={'arrow-right'} 
            navigateTo={'contact'}
        />
    
        <GridSlider 
            data={Gain}
        />

        <Steps />

        <ImageAndText 
            id={'secondwhikadbjcob'} 
            title={'Gain acces to free and new features now'} 
            desc={['In addition to the website built, you will have access to premium and free packages, all for your needs to be easily met']} 
            img={img1} 
            className={'flex-col-reverse lg:flex-row-reverse'} 
            iconText={'View Packages'} 
            icon={'arrow-right'} 
            navigateTo={'pricing'}
        />
        </>
    )
}

export default Home