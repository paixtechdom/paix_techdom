import { Link } from 'react-router-dom'
import logo from '../../assets/img/logoLabelWhite.png'
import '../../assets/Animation.css'
import { useContext, useState } from 'react'
import { Navs } from '../../assets/Constants'
import { useEffect } from 'react'
import { Parallax } from '../../Components/Parallax'
import { Button } from '../Button'
import { AppContext } from '../../App'

const Navbar = () =>{
    const { currentNav, setCurrentNav } = useContext(AppContext)
    const [ posWidth, setPosWidth ] = useState(0)
    const [ showNav, setShowNav ] = useState(false)
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
           <nav className='w-full center  bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] fixed min-h-[8vh] md:min-h-[13vh] top-0 left-0 z-50 border-b border-blue-900'>
                <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex justify-between">
                    <Link to='/' className="logo text-2xl w-2/12" onClick={() => setShowNav(false)}>
                        <img src={logo} alt="" className='w-9/12 md:w-7/12 lg:w-5/12'/>
                    </Link>

                    <i className={`bi bi-${showNav ? 'x-lg' : 'list'} cursor-pointer md:hidden text-2xl`} onClick={e => setShowNav(!showNav)}></i>

                    <div className={`${showNav ? 'left-0' : '-left-[100vw] md:left-0'} transition-all duration-1000 absolute py-9 md:py-0 bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] md:from-transparent w-full md:w-fit top-[8vh]  md:top-0 md:relative flex flex-col md:flex-row gap-9 items-center border-b border-blue-900 md:border-b-0`}>
                        {
                            Navs.map((nav, i) => (
                                <Link key={i} to={`/${nav.link}`} className={`flex w-11/12 md:w-fit gap-2 items-center ${currentNav == i ? 'text-blue-500 border-b border-blue-900' : ''} hover:text-blue-400 hover:border-b hover:border-blue-400`} onClick={e => {
                                    setCurrentNav(i)
                                    setShowNav(false)
                                    }}>
                                    <i className={`bi bi-${nav.icon}-fill`}></i>
                                    <p className="text-sm">
                                        {nav.name}
                                    </p>
                                </Link>
                            ))
                        }
                        <div className="w-11/12 md:w-fit">
                            <Button className={'w-fit'} text={'Get started now'} icon={'chevron-right'}/>
                        </div>

                    </div>
                </div>
           </nav>
        </>
    )
}


export default  Navbar