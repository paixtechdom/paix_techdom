import hero from '../../assets/img/hero.png'
import { AboutInfo, AfterHero } from '../../assets/Constants'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'
import { ImageAndText } from '../../Components/ImageAndText'
import { WeOffer } from './WeOffer'
import { AfterHeroComponent } from './AfterHeroComponent'
import { Pricing } from '../Pricing/Pricing'
import { About } from '../About/About'
import img1 from '../../assets/img/images (8).jpeg'
import img2 from '../../assets/img/client-portal.png'
import { Testimonies } from './Testimonies'
import { RecentBlogs } from '../Blog/RecentBlogs'
import { Numbers } from './Numbers'


export const Home = () => {
    const { smallScreen, mediumScreen, setShowNavBar } = useContext(AppContext)
    const heroText = AboutInfo.homePageHeader.split("")
    const [ index, setIndex ] = useState(0)
    const [ index2, setIndex2 ] = useState(0)
    const [ forNo, setForNo ] = useState(0)
    
    useEffect(() => {
        setShowNavBar(true)
        document.documentElement.scrollTop = document.documentElement.scrollTop - 1
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setIndex(index > AboutInfo.homePageHeader.length ? AboutInfo.homePageHeader.length : index + 1)
        }, 15);
        
    }, [index])
    
    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 4000);
        return () => clearInterval(int)
    }, [forNo])

    const slide = () => {
            setForNo(forNo == AboutInfo.homePageHeaderFor.length - 1 ? 0 : forNo + 1 )
    }
 
    return(

        <>
        
        <div id='Home' className={`section relative flex bg-bl ${mediumScreen ? 'h-auto' : 'h-screen'} overflow-hidde flex-col items-center justify-center bg-fixed bg-no-repeat  small-lg`}>
            <div className="absolute bg-blue border-black w-full top-0 h-ful rounded-b-3xl" style={{
                height: 90+'%',
                paddingTop: smallScreen ?  5+'vh' : mediumScreen ?  15+'vh' : ''
            }}>

            </div>
               
            <div className={`flex items-center ${mediumScreen ? 'flex-col' : ' h-4/'} justify-between  w-10/12 h-full bg-blue400`} style={{
                height: 80+'%',
                marginTop: mediumScreen ?  20+'vh' : ''
            }}>
                <div className={`flex flex-col justify-cente text-white z-10 bg-blue600 ${mediumScreen ? 'items-center text-center' : 'w-7/12 items-start text-left '}`}>

                    <h1 className={`${smallScreen ? 'text-4xl' : 'text-4xl'} text-gray-100 font-bold mt-3`} >
                        <b className=''>
                            {
                            //    AboutInfo.homePageHeader
                                heroText.map((letter, key) => (
                                    key < index ?
                                    <span key={key}> 
                                        {letter}
                                    </span> : ''
                                ))
                            }
                            
                        </b>
                        <b className={`h-fit mt-2 overflow-hidden bg-blue-40 w-fit flex ${mediumScreen ? 'text-center m-auto' : ''}`} style={{
                            height: smallScreen ? 2.5+'rem' : 2.5+'rem'
                        }}>
                            <b className={`transition-all duration-1000  ${mediumScreen ? 'justify-center' : 'flex flex-col items-start'} `} style={{
                                transform: 
                                smallScreen ? `translateY(-${forNo * 2.5}rem)` : 
                                `translateY(-${forNo * 2.5}rem)`  ,
                                
                            }}>
                                {
                                    AboutInfo.homePageHeaderFor.map((fo, key) => (
                                        <span key={key} className={` ${fo?.color}  flex ${mediumScreen ? 'm-auto' : ''} bg-blue-00 w-fit`} style={{
                                            visibility: forNo == key ? '' : 'hidden'
                                        }}>
                                             {fo?.text}
                                        </span>

                                    ))
                                }

                            {
                            }
                            </b>

                        </b>
                    </h1>
                    <Parallax id={'hero'} >
                        
                        <p className="mt-3 mb-6 text-gray-100">
                        {AboutInfo.homePageIntro}
                        </p>
                    </Parallax>
                    <div className='flex justify-center'>
                        <a href={'#Contact'} className={`z-10 rounded-full h-full w-fit noBgButton  font-bold  bg-orange  button px-6 py-3 text-black small`}>
                            GET STARTED
                        </a> 
                       
                    </div>
                </div>

                <div className={`flex
                ${mediumScreen ? ' w-full shadow-x' : ' w-5/12 h-full items-center'} 
                rounded-3xl z-10 w-11/12 overflow-hidden bg-blue-20`} style={{
                   transform: !mediumScreen ?  'scale(0.9)' : ' ',
                   
                }}>
                    <div className={`bg-blue-20 z-20 flex flex-co items-center  w-ful transition-all duration-1000 ${mediumScreen ? 'h-full' : ''}`} style={{
                        transform: `translate(-${forNo * 100}%)`
                    }}>
                        {
                            AboutInfo.homePageHeaderFor.map((fo, key) => (
                                <img key={key} src={fo?.img} alt="" className='rounded-2xl p- m-o z-10 h-full animateHeroImg bg-blue-30 w-full' style={{
                                    width: 100+'%',
                                    minWidth: 100+'%'
                                }} />
                            ))
                        }

                    </div>
                </div>
            </div>   

        </div>
        <Numbers />
        <div id='About' className='section flex flex-col items-center'>
            <About AboutInfo={AboutInfo}/>
            <div  className={`flex justify-center ${mediumScreen ? 'w-11/12' : 'w-10/12'}`}>

                <div className={`w-full flex flex-col justify-between my-9 gap-5`} style={{
                }}>

                {
                    AfterHero.map((reason, key) => (
                        <Parallax key={key} id={reason.title.split(" ").join('').toLowerCase()}>
                        
                            <AfterHeroComponent reason={reason} i={key}/>
                        </Parallax>
                    ))
                }

                </div>
            </div>
            <div className={`flex justify-start ${mediumScreen ? 'w-11/12' : 'w-10/12'}`}>
                <a href={'#Contact'} className={`z-10 rounded-full h-full w-fit noBgButton  font-bold  bg-orange  button px-6 py-3 text-black small`}>
                    GET STARTED
                </a> 
                       
            </div>

        </div>

        <ImageAndText id={'ahsf'} title={'Dynamic website tailored to your brand'} desc={'Your success is our success. We prioritize understanding your unique goals and challenges, tailoring our services to suit your specific needs. Collaboration is at the heart of what we do.'} img={img1}/>
        <WeOffer />
        <Testimonies />
        <Pricing /> 
        <ImageAndText id={'wrig'} title={'Client-centric approach'} desc={"Your success is our success. We prioritize understanding your unique goals and challenges, tailoring our services to suit your specific needs. Collaboration is at the heart of what we do."} img={img2}/>

        <RecentBlogs no={3} showReadMore={true}/>
        </>
    )
}