import { Title } from "../../Components/Title"
import { ContactInfo } from "../../assets/Constants"
import { useContext, useState } from "react"
import { AppContext } from "../../App"
import axios from "axios"
import { useEffect } from "react"
import { Parallax } from "../../Components/Parallax"


export const Contact = () => {
    const { setShowAlert, setAlertMessage, setAlertType, smallScreen, subject, setSubject, mediumScreen, isScrollTopZero } = useContext(AppContext)

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ nameError, setNameError ] = useState(false)
    const [ messageError, setMessageError ] = useState(false) 
    const [ isLoading, setIsLoading ] = useState(false) 
    const [ isTypingName, setIsTypingName ] = useState(true)
    const [ isTypingEmail, setIsTypingEmail ] = useState(true)
    const [ isTypingSubject, setIsTypingSubject ] = useState(true)
    const [ isTypingMessage, setIsTypingMessage ] = useState(true)

    useEffect(() => {
        
        setIsTypingName(name.length < 1 ? false : true)
        setIsTypingEmail(email.length < 1 ? false : true)
        setIsTypingSubject(subject.length < 1 ? false : true)
        setIsTypingMessage(message.length < 1 ? false : true)
        
    }, [name, message, email, subject])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
        const newName = name.split(' ').join('')
        const newMessage = message.split(' ').join('')
        if(newName.length < 5 || newName == 0){
            setNameError(true)
            setMessageError(false)
        }else if(newMessage.length < 5 || newMessage == 0){
            setMessageError(true)
            setNameError(false)
        }else{
            setMessageError(false)
            setNameError(false)

            const serviceId = 'service_xhn7c5e';
            const templateId = 'template_seeyysd';
            const publicKey = 'OB73Vlg7iLdz4EZD6';
         
            const data = {
                service_id: serviceId ,
                template_id: templateId,
                user_id: publicKey,
                 template_params: {
                    from_name: name,
                    from_email: email,
                    to_name: 'Oluwaferanmi Peace',
                    message: 
                    'SUBJECT  - ' + subject + ' - ' + 
                    'MESSAGE - ' + message 
                }
            };
            await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
            .then((response) => {
            setShowAlert(true)
            setAlertType('success')
            setIsLoading(false)
            setAlertMessage('Message sent successfully!')
            setName('')
            setEmail('')
            setMessage('')
        })
        .catch((error) =>{
            setShowAlert(true)
            setIsLoading(false)
            setAlertType('error')
            setAlertMessage('Error sending message')
        })
     }
    }

    return(
        <div className="section contact flex flex-col items-center mt-9 py-9 bg-whit bg-gray-100" id="Contact">

            <Title title={'Contact Us'} icon={'telephone'}/>
           
            <div className={`justify-center ${mediumScreen ? 'w-11/12 flex flex-col  items-center justify-center ' : 'grid grid-cols-2 w-9/12 items-center'}`}>
                    <div className={`flex ${mediumScreen ? 'border-gray-300 shadow-lg border w-11/12 items-center justify-between px-2' : 'flex-col w-11/12'} rounded-3xl  `}>
                        {
                            ContactInfo.map((info, key) => (
                                <Parallax id='icons'  key={key}z>
                                <a className={`flex ${mediumScreen ? 'flex-col' : 'gap-4'} items-center justify-start p-2 x-9 text-2xl`} 
                                href={info.link}>
                                    <p className={`flex items-center justify-center rounded-full   ${ mediumScreen ? 'text-blue' : 'shadow-lg bg-blue-fade text-blue'}`} style={{
                                        width: !mediumScreen ? 60+'px' : '',
                                        height: !mediumScreen ? 60+'px' : ''
                                    }}>
                                        <i className={`bi bi-${info.icon} scale-75 md:scale-100`} ></i>

                                    </p>
                                    {
                                        mediumScreen ? '' :
                                        <p className={`text-lg text-blue`}> {info.title} </p> 
                                    } 
                                </a>
                            </Parallax>
                            ))
                        }
                    </div>

                <form className="flex justify-center w-full " onSubmit={handleSubmit}>
                <div className="w-11/12 my-4">
                        <Parallax id='name'>
                            <div className="mb-4 md:mb-2 relative">
                                <label className={`absolute left-4 text-gray-600 ${isTypingName ? '-top-1  -translate-y-2 small' : 'small top-6' }  transition-all duration-100`}> Full Name</label>
                                <input type="text" className="w-full bg-transparent  outline-none my-1 border-gray-300 shadow-lg border rounded-xl p-4  text-sm " id="fullname" 
                                // placeholder='Full Name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                                />
                                {
                                    nameError ? 
                                    <p className="text-red-900 small-lg text-center">Name is too short</p> : ''
                                }
                            </div>
                        </Parallax>
                        <Parallax id='email'>
                            <div className="mb-4 md:mb-2 relative">
                                <label className={`absolute left-4 text-gray-600 ${isTypingEmail ? '-top-1  -translate-y-2 small' : 'small top-6' }  transition-all duration-100`}>Your Email</label>
                                <input type="email" className="w-full bg-transparent  outline-none my-1 border-gray-300 shadow-lg border rounded-xl p-4  text-sm " 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                />
                            </div>
                        </Parallax>
                        <Parallax id='subject'>
                            <div className="mb-4 md:mb-2 relative">
                                <label  className={`absolute left-4 text-gray-600 ${isTypingSubject ? '-top-1  -translate-y-2 small' : 'small top-6' }  transition-all duration-100`}> Subject</label>
                                <input type="text" className="w-full bg-transparent  outline-none my-1 border-gray-300 shadow-lg border rounded-xl p-4  text-sm "  
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                />
                            </div>
                        </Parallax>
                        <Parallax id='message'>
                            <div className="mb-4 md:mb-2 relative">
                                <label className={`absolute left-4 text-gray-600 ${isTypingMessage ? '-top-1  -translate-y-2 small' : 'small top-6 ' }  transition-all duration-100`}> Message</label>
                                <textarea name="" id="" className='w-full bg-transparent  outline-none my-1 border-gray-300 shadow-lg border rounded-xl p-4 py-4 text-sm '  required  style={{
                                    maxHeight: 100+'px',
                                    minHeight: 100+'px'
                                }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                {
                                    messageError ? 
                                    <p className="text-red-900 small-lg text-center">Message is too short</p> : ''
                                }
                            </div>
                        </Parallax>
                        <Parallax id='send'>
                            <button className="w-full bg-blue shadow-lg border text-gray-100 cursor-pointer outline-none my-1  rounded-xl p-3 text-xl">
                            {isLoading? 
                                <p className="flex items-center justify-center">
                                    
                                <i className="text-xl bi bi-arrow-clockwise animate-spin mx-2"></i>
                                Sending Message...
                                </p>
                            : 
                                <>
                                Send Message
                                <i className="bi bi-chevron-right mx-2"></i>
                                </>
                            }
                            </button>
                        </Parallax>
                </div>




            </form>  

            </div>
        
        </div>
    )
}