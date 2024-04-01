import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import { Navs } from '../../assets/Constants'
import logo from '../../assets/img/logoBlue2.png'
import { Contact } from '../../Pages/Contact/Contact'
import { Parallax } from '../Parallax'

export const Footer = () => {
    const { mediumScreen, currentNav } = useContext(AppContext)
    return(
        <>

        <Contact />
        <div className=" w-full flex justify-center bg-blue text-white">
           <div className={`${mediumScreen ? 'w-11/12' : 'w-9/12'}  px-3 flex flex-col items-center gap-6 my-8 z-20`}>
                <p className="text-2xl w-full font-bold">Quick Links</p>
                {
                    Navs.map((nav, key) => (
                        <div  key={key} className={`px-3 flex gap-2 w-full text-gray-300 cursor-pointer`} onClick={() => {
                            document.querySelector(`#${nav.link}`).scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}>
                            <i className={`bi bi-${nav.icon}-fill`}></i>
                            <p>{nav.name}</p>
                        </div>
                    ))
                }

           </div>

        </div>            
            <div className="bg-blue p-3 py-9 flex justify-center items-center text-white text-center border-top-white">
                <p>&copy; Copyright <strong className='text-xl'> Paix Techdom </strong></p>
             

            </div>
        </>
    )
}