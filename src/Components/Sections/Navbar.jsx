import { Link } from 'react-router-dom'
import logoWhite from '../../assets/img/logoWhite2.png'
import logoLabelWhite from '../../assets/img/logoLabelWhite.png'
import logoLabelBlue from '../../assets/img/logoLabelBlue.png'
import '../../assets/Animation.css'
import { useState } from 'react'
import { Navs } from '../../assets/Constants'
import { useEffect } from 'react'
import { ScrollTo } from '../../assets/Func'

export const Navbar = ({mediumScreen, smallScreen}) =>{
    const [ showNav, setShowNav ] = useState(false)
    const [ posWidth, setPosWidth ] = useState(0)
    const [ currentNav, setCurrentNav ] = useState(0)
    const [ isScrollTopZero, setIsScrollTopZero ] = useState(true)


    document.querySelectorAll('#navLink').forEach((a) => {
        a.addEventListener('click', () => {
            setShowNav(false)
        })
    })
    
    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
    }, [])
    
    const handleScroll = () =>{
        const pageHeight = document.documentElement.scrollHeight - window.innerHeight
        const currentPos = window.scrollY
        setPosWidth(currentPos / pageHeight * 100 < 2 ? 2 : currentPos / pageHeight * 100)
        if(document.documentElement.scrollTop > 200){
            setIsScrollTopZero(false)
        }else{
            setIsScrollTopZero(true)
        }

        document.querySelectorAll('.section').forEach((parent, i) =>{
            const pos = parent.getBoundingClientRect()
            if( pos.top > -10 && pos.top < 100) {
                setCurrentNav(i)
            } 
        })

    }
    
    return(
        <>
            <nav className='flex flex-col items-center w-full py-2 text-white fixed top-0 left-0 navbar'>
                <div className={`flex rounded-full ${mediumScreen ? 'w-11/12 ' : 'w-10/12'} ${!isScrollTopZero && !mediumScreen ? 'shadow-lg' : ''}`}>

                    <div className={`w-full ${!isScrollTopZero && mediumScreen ? 'shadow-lg' : ''} flex justify-between items-center relative  transition-all duration-250 ${isScrollTopZero ? 'bg-blue' : ' px-9'} ${mediumScreen ? ' rounded-full px-6' : 'bg-gray-100 rounded-l-full '} backdrop-blur-2xl`}>
                        <Link to='/' className='bg-blu flex items-center justify-center rounded-full w-6/12' style={{
                            width: 70+'px',
                            height: 70+'px'
                        }} onClick={() =>setShowNav(false)}>
                            
                                <p className={`${isScrollTopZero ? 'text-white' : 'text-blue'} font-bold logo text-2xl`}>Paix</p>
                        </Link>
                        {mediumScreen ?
                        <div className={`text-2xl h-10 w-9 p-2 bg-blue flex justify-center items-center w-min rounded-full cursor-pointer `} onClick={() => {
                            setShowNav(!showNav)
                        }} style={{
                            width: 40+'px',
                            height: 40+'px'
                        }}>
                            <p className={`bi bi-${showNav ? 'chevron-up' : 'justify'}`}></p>
                        </div>
                    : ''} 
                    
                    </div>
                    <div className={`flex ${mediumScreen ? 'absolute w-full ' : 'w-5/12'}  right-0  flex justify-center ${isScrollTopZero && mediumScreen ? 'borber-bottom-white' : ''} ${showNav ? 'slideInNav' : 'slideOutNav'}`} style={{
                        top: showNav ? 100+'%' : -600+'%'
                    }}>

                        <div className={`flex   ${mediumScreen ? 'bg-blue w-11/12  flex-col rounded-3xl' : 'backdrop-blur-2xl flex-row w-full rounded-r-full justify-end items-center bg-gray-100'} 
                        px-3 py-4   ${isScrollTopZero ? 'bg-blue' : 'bg-gray-100'}`}>
                            {
                                Navs.map((nav, key) =>(
                                    key == 4 ?
                                    <Link id='navLink' key={key}  to={`${nav.link}`} className={`flex ${isScrollTopZero ? 'text-gray-300' : 'text-blue'} p-2 items-center rounded ${mediumScreen? 'gap-3': 'flex-col'}`}>
                                    
                                        {
                                            mediumScreen ? 
                                            <i className={`bi bi-${nav.icon}-fill   rounded-full ${mediumScreen ? 'px-3 py-2 text-' : 'text-2xl text-blue'}  ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-white' :  'text-whit'}`}></i> : ''
                                        }

                                        <p className={`px-1  small  ${mediumScreen ? '' : 'font-bold '} ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-white' :  'text-whit'}`}>{nav.name}</p>
                                    </Link> : 
                                    key < Navs.length - 1 ?
                                    <a href={`#${nav.link}`} id='navLink' key={key} className={`flex ${isScrollTopZero ? 'text-gray-300' : 'text-blue'} p-2 items-center rounded ${mediumScreen? 'gap-3': 'flex-col'}`} onClick={() => {
                                        // ScrollTo(document.documentElement.scrollTop, nav.link)
                                    }}>
                                    
                                        {
                                            mediumScreen ? 
                                            <i className={`bi bi-${nav.icon}-fill   rounded-full ${mediumScreen ? 'px-3 py-2 text-' : 'text-2xl text-blue'}  ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-white' :  'text-whit'}`}></i> : ''
                                        }

                                        <p className={`px-1  small  ${mediumScreen ? '' : 'font-bold '} ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-white' :  'text-whit'}`}>{nav.name}</p>
                                    </a> : ''
                                ))
                            }
                            {
                                Navs.map((nav, key) =>(
                                    key >= Navs.length - 1 &&
                                    <a id='navLink' key={key}  href={`#${nav.link}`} className={`flex e rounded-full px-3 p-2 items-center ${mediumScreen? 'text-black gap-3': 'bg- text-black flex-col'}`}>
                                    
                                        {
                                            mediumScreen ? 
                                            <i className={`bi bi-${nav.icon}-fill   rounded-full ${mediumScreen ? 'px-3 py-2 ' : 'text-2xl'}  ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-white' :  'text-whit'}  text-`} ></i> : ''
                                        }

                                        <p className={`px-1 small bg-orange rounded-full p-2 px-7 ${mediumScreen ? '' : 'font-bold'}  ${currentNav == key ? 'text-gray-600' : ''}`}>{nav.name}</p>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                

                </div>
                <div className={`${mediumScreen ? 'w-11/12' : 'w-10/12'} flex justify-cente absolute`} style={{
                        zIndex: 8000,
                    }}>

                        <div className="bg-blue flex justify-end transition-all duration-200 rounded" style={{
                            width: posWidth+'%',
                            height: 5+'px'
                        }}>
                            <i className="bi bi-person-fill right-0 transition-all duration-200 text-blue " style={{
                                left: posWidth+'%',
                                fontSize: 20+'px',
                                textShadow: '0px 0px 1px white'
                            }}></i>
                        </div>
                </div>
            </nav>
        </>
    )
}