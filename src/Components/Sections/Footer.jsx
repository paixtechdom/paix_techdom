import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../App'
import { ContactInfo, Navs } from '../../assets/Constants'
import { Parallax } from '../Parallax'
import { Button } from '../Button'



const Footer = () => {
    const { currentNav, setCurrentNav } = useContext(AppContext)
    const navigate = useNavigate()
    return(
        <footer>
        <Parallax id={'ljfkjbdkf'}  className="w-full border-t border-blue-900 mt-[10vh]">
        </Parallax>
        <div className=" w-full flex justify-center text-white">
           <div className={`w-11/12 lg:w-10/12 xl:w-9/12 px-3 flex flex-col lg:flex-row items-start justify-between gap-9 my-8 z-20 `}>
            <div className="flex flex-col gap-3 w-full lg:w-6/12">
              
                <h3 className="text-2xl text-blue-600">
                    Paix Techdom
                </h3>
                <p className='tracking-wide leading-relaxed text-gray-300'>
                We are dedicated to ensuring organizations, startups, small, medium and large size companies are equipped with the right website for their online presence and business activities
                </p>
                <div className="w-full">
                    <Button className={'w-fit'} text={'Get started now'} icon={'telephone-fill'} func={() => {
                        navigate('/Contact')
                    }}/>
                </div>
             <div className="flex items-start flex-col w-11/12 mt-[5vh] gap-4">
                <Parallax id={'contacticons'} className="flex gap-5">
                    {
                        ContactInfo.map((contact, i) => (
                            !contact.title &&
                            <a key={i} target="_blank" href={contact.link} className="p-2 h-12 w-12 center relative">
                                <div className="border rounded-tl-3xl rounded-br-3xl border-blue-900 absolute top-0 right-0 rotate-[45deg] w-full h-full">
                                </div>
                                <i className={`bi bi-${contact.icon} text-xl `}></i>
                            </a>
                        ))
                    }
                </Parallax>
                    {
                        ContactInfo.map((contact, i) => (
                            contact.title &&
                            <Parallax key={i} id={contact.icon} className={'flex gap-4'}>
                                <i className={`bi bi-${contact.icon}-fill text-xl `}></i>
                                <a target="_blank" href={contact.link}>
                                    {contact.title}
                                </a>
                            </Parallax>
                        ))
                    }
                    
                </div>
            </div>

            <div className={`w-full lg:w-5/12 px-3 flex flex-col items-center lg:items-end gap-6 my-8 z-20`}>

                    <div className="w-full flex justify-center lg:justify-end gap-4 items-start">
                        <p className="text-2xl w-fit  font-bold text-blue-600">Quick Links</p>


                    </div>
                    {
                        Navs.map((nav, i) => (
                            <Link key={i} to={`/${nav.link}`} className={`flex w-fit justify-center lg:justify-end gap-2 items-center ${currentNav == i ? 'text-blue-600 border-b border-blue-900' : 'text-gray-300'} hover:text-blue-600 hover:border-b hover:border-blue-400`} onClick={
                                e => setCurrentNav(i)
                            }>
                            <i className={`bi bi-${nav.icon}`}></i>
                            <p className="">
                                {nav.name}
                            </p>
                        </Link>
                        ))
                    }
                    <Button className={'w-fit'} text={'Contact Us'} icon={'telephone-fill'} func={() => {
                        navigate('/Contact')
                    }}/>

            </div>
           </div>

        </div>     
        <Parallax id={'fjlf'}>
            <div className="p-3 py-9 flex justify-center items-center text-white text-center border-t border-blue-900">
                <p>&copy; Copyright <strong className='text-xl'> Paix Techdom </strong> {new Date().getFullYear()} </p>
            </div>
        </Parallax>       
        </footer>
    )
}


export default Footer