
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'
import { useNavigate } from 'react-router-dom'

export const ImageAndText = ({id, title, desc, img, className, iconText, icon, scrollTo, navigateTo}) => {
    const navigate = useNavigate()
    return(
        
        <div id={id} className='flex justify-center my-[12ch]  text-gray-100 h-fit -90 items-center border-t border-blue-900'>
            
            <div className={`center ${className ? className : 'flex-col lg:flex-row'} w-11/12 lg:w-10/12 xl:w-9/12 gap-[7ch]`}>
                <div className={`flex flex-col gap-4 lg:w-7/12`}>
                    <Parallax id={`shit${id}`}>
                        <h2 className={`text-3xl text-blue-600`}>{title}</h2>
                    </Parallax>
                    
                    <Parallax id={`shiet${id}`}>
                        <div className={`small-lg text-gray-300 tracking-wide leading-relaxed `}>{
                            desc.map((d, i) => (
                                <p key={i}>{d}</p>
                            ))
                        }

                        </div>
                    </Parallax>

                    <Parallax id={`btn${id}`}>
                    <Button text={iconText} icon={icon} className={'w-fit'} func={() => {
                        scrollTo ?
                        document.querySelector(`#${scrollTo}`).scrollIntoView({
                            behavior: 'smooth'
                        })
                        : 
                        navigate(navigateTo)
                    }}/>
                    </Parallax>
                    
                </div>
                
                <Parallax id={`shit${id}`} className={'w-full lg:w-11/12 center'}>
                    <div className={`center overflow-hidden w-10/12 lg:w-full`}>
                        {/* <div className="w-[250px] h-[250px] rounded-tl-[70px] rounded-br-[70px] rotate-[45deg] border border-gray-100 overfl ow-hidden center"> */}
                            <img src={img} alt="" className={` w-fit ull h-full rounded-tl-[25px] rounded-bl-[150px] rounded-tr-[150px] rounded-br-[25px]`}/>

                        {/* </div> */}
                    </div>
                </Parallax>
           
            </div>
        </div>
    )
}