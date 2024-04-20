import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import { ContactInfo, Navs } from '../../assets/Constants'
import logo from '../../assets/img/logoBlue2.png'
import { Parallax } from '../Parallax'
import { Button } from '../Button'

const Footer = () => {
    const { currentNav } = useContext(AppContext)
    return(
        <>

        <div className=" w-full flex justify-center text-white border-t border-blue-900">
           <div className={`w-11/12 lg:w-10/12 xl:w-9/12 px-3 flex flex-col items-center gap-6 my-8 z-20`}>

                <div className="w-full flex justify-start flex-col gap-4 items-start">
                     <p className="text-2xl w-full lg:w-4/12 font-bold text-blue-600">Quick Links</p>

                    <div className="flex items-center justify-start gap-5 w-full">
                        {
                            ContactInfo.map((contact, i) => (
                                <a key={i} href={contact.link} className='p-2 h-12 w-12 center relative'>
                                    <div className="border rounded-tl-3xl rounded-br-3xl border-blue-900 absolute top-0 right-0 rotate-[45deg] w-full h-full">

                                    </div>
                                    <i className={`bi bi-${contact.icon} text-blue-100`}></i>
                                </a>
                            ))
                        }
                    </div>

                </div>
                {
                    Navs.map((nav, i) => (
                        <Link key={i} to={`/${nav.link}`} className={`flex w-full gap-2 items-center ${currentNav == i ? 'text-blue-500 border-b border-blue-900' : ''} hover:text-blue-600 hover:border-b hover:border-blue-400`} onClick={e => setCurrentNav(i)}>
                        <i className={`bi bi-${nav.icon}-fill`}></i>
                        <p className="text-sm">
                            {nav.name}
                        </p>
                    </Link>
                    ))
                }
                 <div className="w-full md:w-fit">
                    <Button className={'w-fit'} text={'Get started now'} icon={'telephone-fill'}/>
                </div>

           </div>

        </div>     
        <Parallax id={'fjlf'}>
            <div className="p-3 py-9 flex justify-center items-center text-white text-center border-t border-blue-900">
                <p>&copy; Copyright {new Date().getFullYear()} <strong className='text-xl'> Paix Techdom </strong></p>
            </div>
        </Parallax>       
        </>
    )
}


export default Footer