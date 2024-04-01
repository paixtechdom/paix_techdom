import { Link } from 'react-router-dom'
import logoWhite from '../../assets/img/logoWhite2.png'
import logoLabelWhite from '../../assets/img/logoLabelWhite.png'
import logoLabelBlue from '../../assets/img/logoLabelBlue.png'
import '../../assets/Animation.css'
import { useState } from 'react'
import { BlogNavs as Navs } from '../../assets/Constants'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'

export const BlogNav = ({focusSearch}) =>{
    const [ showNav, setShowNav ] = useState(false)
    const [ posWidth, setPosWidth ] = useState(0)
    const [ currentNav, setCurrentNav ] = useState(0)
    const [ isScrollTopZero, setIsScrollTopZero ] = useState(true)
    const { mediumScreen } = useContext(AppContext)

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
            <nav className={`flex flex-col items-center w-full text-white fixed top-0 left-0 navbar  bg-gray-100  ${!isScrollTopZero ? 'shadow-lg' : ''}`}>
                <div className={`flex ${mediumScreen ? 'w-11/12' : 'w-11/12 backdrop-blur-2xl'} `}>

                    <div className={`w-full flex justify-between items-center relative  transition-all duration-250  ${mediumScreen ? '' : ' '} `}>
                        <Link to='/' className='bg-blu flex items-center justify-center w-fit' style={{
                            height: 70+'px'
                        }} onClick={() =>setShowNav(false)}>
                            
                                <p className={`text-blue font-bold logo text-2xl`}>Paix</p>
                        </Link>
                        {mediumScreen ?
                        <div className='flex items-center gap-3'>
                            <a href='#search' className='cursor-pointer' onClick={() => focusSearch()}>
                                <i className="bi bi-search text-blue text-xl"></i>
                            </a>
                            <div className={`text-2xl h-10 w-9 p-2  flex justify-center items-center w-min rounded-full cursor-pointer text-blue`} onClick={() => {
                                setShowNav(!showNav)
                            }} style={{
                                width: 40+'px',
                                height: 40+'px'
                            }}>
                                <p className={`bi bi-${showNav ? 'chevron-up' : 'justify'}`}></p>
                            </div>

                        </div>
                        : ''} 
                    
                    </div>
                    <div className={`flex ${mediumScreen ? 'absolute w-full border-top-blue' : 'w-5/12'}  bg-gray-100 right-0  flex justify-center borber-bottom-white ${showNav ? 'slideInNav' : 'slideOutNav'}`} style={{
                        top: showNav ? 100+'%' : -600+'%'
                    }}>

                        <div className={`flex   ${mediumScreen ? ' w-11/12  flex-col' : 'backdrop-blur-2xl flex-row w-full justify-end items-center '} 
                        px-3 font-bold`}>
                            {
                                Navs.map((nav, key) =>(
                                    key == 0 ?
                                    <Link id='navLink' key={key}  to={`/`} className={`flex ${isScrollTopZero ? 'text-gray-300' : 'text-blue'} p-2 items-center rounded ${mediumScreen? 'gap-3': 'flex-col'}`}>
                                    
                                        {
                                            mediumScreen ? 
                                            <i className={`bi bi-${nav.icon}-fill   rounded-full ${mediumScreen ? 'px-3 py-2 text-' : 'text-2xl text-blue'}  ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-white' :  'text-whit'}`}></i> : ''
                                        }

                                        <p className={`px-1  small  ${mediumScreen ? '' : 'font-bold '} ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-white' :  'text-black'}`}>{nav.name}</p>
                                    </Link> : 
                                    key < Navs.length - 1 ?
                                    <a id='navLink' key={key}  href={`#${nav.link}`} className={`flex ${isScrollTopZero ? 'text-gray-300' : 'text-blue'} p-2 items-center rounded ${mediumScreen? 'gap-3': 'flex-col'}`}>
                                    
                                        {
                                            mediumScreen ? 
                                            <i className={`bi bi-${nav.icon}-fill   rounded-full ${mediumScreen ? 'px-3 py-2 text-' : 'text-2xl text-blue'}  ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-blue' :  'text-whit'}`}></i> : ''
                                        }

                                        <p className={`px-1  small  ${mediumScreen ? '' : 'font-bold '} ${currentNav == key ? 'text-gray-500' : mediumScreen ? 'text-blue' :  'text-blue'}`}>{nav.name}</p>
                                    </a> : ''
                                ))
                            }
                            {
                                mediumScreen ? '' :
                                <a href='#search' className='bg-gray-20 rounded-full flex items-center justify-center ml-4 cursor-pointer' style={{
                                    height: 30+'px',
                                    width: 30+'px'
                                }} onClick={() => {
                                    focusSearch()
                                }}>
                                <i className="bi bi-search text-black text-xl"></i>
                                </a> 
                            }
                            {/* {
                                Navs.map((nav, key) =>(
                                    key >= Navs.length - 1 &&
                                    <a id='navLink' key={key}  href={`#${nav.link}`} className={`flex e rounded-ful px-3 p-2 items-center ${mediumScreen? 'text-black gap-3': 'bg- text-black flex-col'}`}>
                                    
                                        {
                                            mediumScreen ? 
                                            <i className={`bi bi-${nav.icon}-fill   rounded-full ${mediumScreen ? 'px-3 py-2 ' : 'text-2xl'}  ${currentNav == key ? 'text-gray-400' : mediumScreen ? 'text-blue' :  'text-whit'}  text-`} ></i> : ''
                                        }

                                        <p className={`px-1 small bg-orange rounded-full p-2 px-7 ${mediumScreen ? '' : 'font-bold'}  ${currentNav == key ? 'text-gray-600' : ''}`}>{nav.name}</p>
                                    </a>
                                ))
                            } */}
                        </div>
                    </div>
                

                </div>
                <div className={`${mediumScreen ? 'w-11/12' : 'w-9/12'} flex justify-cente absolute`} style={{
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