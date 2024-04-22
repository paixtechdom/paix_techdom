import { Title } from "../Components/Title"
import { ContactInfo } from "../../assets/Constants"
import { useContext, useState } from "react"
import { AppContext } from "../../App"
import axios from "axios"
import { useEffect } from "react"
import { Parallax } from "../../Components/Parallax"


const Contact = () => {
    const { setShowAlert, setAlertMessage, setAlertType, subject, setSubject, mediumScreen, isScrollTopZero } = useContext(AppContext)
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ nameError, setNameError ] = useState(false)
    const [ messageError, setMessageError ] = useState(false) 
    const [ isLoading, setIsLoading ] = useState(false) 

    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])

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
           
            <div className={`center w-11/12 flex-col  lg:grid lg:grid-cols-2 items-center `}>
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
                <div className="w-11/12 my-4 flex flex-col gap-7">
                    <Parallax id={'formname'} className={'w-full'}>
                        <FormInput label={'Name'} icon={'person-fill'} value={name} setValue={setName} type={'text'}/>
                        {
                            nameError ? 
                            <p className="text-red-600 p-2 px-4">Name is too short</p> : ''
                        }
                    </Parallax>
                    <Parallax id={'formemail'} className={'w-full'}>
                        <FormInput label={'Email'} icon={'envelope-fill'} value={email} setValue={setEmail} type={'email'}/>
                    </Parallax>

                    <Parallax id={'forsubject'} className={'w-full'}>
                        <FormInput label={'Subject'} icon={'file-text'} value={subject} setValue={setSubject} type={'text'}/>
                        
                    </Parallax>


                    <Parallax id={'formmessage'} className={'w-full'}>
                        <div className="flex w-full relative text-gray-100">
                        <label htmlFor="" className="bg-black absolute text-sm left-3 -top-3 px-4 flex items-center gap-3">
                        <i className={`bi bi-chat-dots-fill `}></i> 
                        
                        Message
                        </label>

                        <div className="flex border border-purple-900 rounded-2xl shadow-lg center w-full overflow-hidden text-sm">
                            <textarea type='text' placeholder="" className="bg-black bg-opacity-70 w-full p-3 pt-5 px-6 outline-none  focus:initial" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            
                        </div>                
                        </div>

                        {
                            messageError ? 
                            <p className="text-red-600 p-2 px-4">Message is too short</p> : ''
                        }
                    </Parallax>

                    <Parallax id={'formsubmit'} className={'w-full'}>
                        <button type="submit" disabled={isLoading} className={`bg-black  border border-purple-900 text-gray-200 rounded-2xl w-full  transition-all duration-1000 gap-3 text-xl p-3 center cursor-pointer hover:scale-90 focus:initial`}>
                            {
                                isLoading ? 'Sending...' : 'Send Message'
                            }
                            {
                                isLoading ? '' : 
                            <i className="bi bi-cursor-fill"></i>
                            }

                        </button>
                    </Parallax>
                </div>




            </form>  

            </div>
        
        </div>
    )
}



const FormInput = ({label, icon, value, setValue, type}) => {
    return(
        <div className="flex flex-col w-full relative text-gray-100 text-sm z-0 gap-4">
        <label htmlFor="" className="bg-transparent px-4 flex items-center gap-3">
        {
            icon !== '' ? 
            <i className={`bi bi-${icon}`}></i> : ''
        } 
        {label} 
            </label>

        <div className="flex border border-purple-900 rounded-2xl shadow-lg center w-full overflow-hidden">
            <input type={type} placeholder="" className="bg-transparent bg-opacity-70 w-full p-3 pt-5 px-6 outline-none focus:initial" value={value} onChange={(e) => setValue(e.target.value)} required/>
            

        </div>
    </div>
        )
}

export default Contact