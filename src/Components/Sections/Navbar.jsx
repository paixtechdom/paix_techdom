import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logoLabelWhite.png'
import '../../assets/Animation.css'
import { useContext, useState } from 'react'
import { Navs } from '../../assets/Constants'
import { useEffect } from 'react'
import { Parallax } from '../../Components/Parallax'
import { Button } from '../Button'
import { AppContext } from '../../App'

export const Navbar = () =>{
    const { currentNav, setCurrentNav } = useContext(AppContext)
    const navigate = useNavigate()
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
        if(document.documentElement.scrollTop > 200){
            setIsScrollTopZero(false)
        }else{
            setIsScrollTopZero(true)
        }


    }
    
    return(
        <>
           <header className='w-full center  bg-gradient-to-l from-secondary via-primary to-secondary fixed min-h-[8vh] lg:min-h-[13vh] top-0 left-0 z-50 border-b border-blue-900'>
                <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex justify-between items-center">
                    <Link to='/' className="logo text-2xl w-2/12" onClick={() => setShowNav(false)}>
                        <img src={logo} alt="Paix Techdom Logo" className='w-9/12  md:w-7/12 lg:w-5/12'/>
                    </Link>

                    <i className={`bi bi-${showNav ? 'x-lg' : 'list'} cursor-pointer lg:hidden text-2xl`} onClick={e => setShowNav(!showNav)}></i>

                    <nav className={`${showNav ? 'left-0' : '-left-[50vw] opacity-0 lg:left-0'} transition-all duration-1000 absolute py-9 lg:py-0 bg-gradient-to-l from-secondary via-primary to-secondary lg:from-transparent w-full lg:w-fit top-[8vh]  lg:top-0 lg:relative flex flex-col lg:flex-row gap-9 items-center border-b border-blue-900 lg:border-b-0`}>
                        {
                            Navs.map((nav, i) => (
                                <Link key={i} to={`/${nav.link}`} className={`flex w-11/12 lg:w-fit gap-2 items-center ${currentNav == i ? 'text-blue-500 border-b border-blue-900' : ''} hover:text-blue-600 hover:border-b hover:border-blue-400`} onClick={e => {
                                    setCurrentNav(i)
                                    setShowNav(false)
                                    }}>
                                    <i className={`bi bi-${nav.icon} lg:hidden xl:block`}></i>
                                    <p className="md:text-sm">
                                        {nav.name}
                                    </p>
                                </Link>
                            ))
                        }
                        <div className="w-11/12 lg:w-fit">
                            <Button className={'w-fit'} text={'Contact Us'} icon={'telephone-fill'}
                            func={() => {
                                navigate('/Contact')
                                setShowNav(false)
                            }}
                            />
                        </div>

                    </nav>
                </div>
           </header>
        </>
    )
}


