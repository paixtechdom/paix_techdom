import { Title } from "../Components/Title"
import { ContactInfo } from "../../assets/Constants"
import { useContext, useState } from "react"
import { AppContext } from "../../App"
import axios from "axios"
import { useEffect } from "react"
import { Parallax } from "../../Components/Parallax"
import { PagesHero } from "../Components/PagesHero"
import image from '../../assets/img/about.jpeg'
import { ContactForm } from "./ContactForm"



const Contact = () => {
    const { setCurrentNav } = useContext(AppContext)
 

    useEffect(() => {
        setCurrentNav(4)
        document.documentElement.scrollTop = 0
    }, [])

 

    return(
        <div className="section contact flex flex-col items-center mt-9  overflow-hidden" id="Contact">

        <PagesHero image={image} header={'Get in touch with us'} text={['Contact us to get started with your premium oackage coupled with many free supplements to generate more leads for your business']} scrollTo={'Values'} button={false}/>


            <div className={`center w-11/12 lg:w-10/12 xl:w-9/12  flex-col  items-center mt-[15vh] lg:mt-5 text-white`}>
                    <div className="flex items-end flex-col w-11/12 mb-[5vh] gap-4">
                        {
                            ContactInfo.map((contact, i) => (
                                contact.title &&
                                <Parallax key={i} id={contact.icon} className={'flex gap-4'}>
                                    <i className={`bi bi-${contact.icon}-fill text-xl `}></i>
                                    <a href={contact.link}>
                                        {contact.title}
                                    </a>
                                </Parallax>
                            ))
                        }
                        <Parallax id={'contacticons'} className="flex gap-5">
                            {
                                ContactInfo.map((contact, i) => (
                                    !contact.title &&
                                    <a key={i} href={contact.link} className="p-2 h-12 w-12 center relative">
                                        <div className="border rounded-tl-3xl rounded-br-3xl border-blue-900 absolute top-0 right-0 rotate-[45deg] w-full h-full">
                                        </div>
                                        <i className={`bi bi-${contact.icon} text-xl `}></i>
                                    </a>
                                ))
                            }
                        </Parallax>
                    </div>
                    <ContactForm />

               

            </div>
        
        </div>
    )
}





export default Contact