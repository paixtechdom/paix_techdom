import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import { Navs } from '../../assets/Constants'
import logo from '../../assets/img/logoBlue2.png'
import { Contact } from '../../Pages/Contact/Contact'

export const Footer = () => {
    const { mediumScreen } = useContext(AppContext)
    return(
        <>

        <Contact />
        <div className=" w-full flex justify-center bg-blue text-white">
           <div className={`${mediumScreen ? 'w-11/12' : 'w-10/12'} px-3 flex flex-col items-center gap-3 my-8`}>
                <p className="text-2xl w-full font-bold">Quick Links</p>
                {
                    Navs.map((nav, key) => (
                        <a href={`#${nav.link}`}  key={key} className='flex gap-2 w-full'>
                            <p>{nav.name}</p>
                        </a>
                    ))
                }

           </div>

        </div>
            
            <div className="bg-blue p-3 flex justify-center text-white border-top-white">
                <p>&copy; Copyright <strong className='text-xl'> Paix Techdom </strong></p>
             

            </div>
        </>
    )
}