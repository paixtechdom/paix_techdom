
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'
import { useNavigate } from 'react-router-dom'

export const ImageAndText = ({id, title, desc, img, className, iconText, icon, scrollTo, navigateTo}) => {
    const navigate = useNavigate()
    return(
        
        <div id={id} className='flex justify-center mt-[12ch] lg:mb-[8ch] text-gray-100 h-fit -90 items-center border-t border-blue-900'>
            
            <div className={`center ${className ? className : 'flex-col lg:flex-row'} w-11/12 lg:w-10/12 xl:w-9/12 gap-[5ch]`}>
                <div className={`flex flex-col gap-4 lg:w-10/12`}>
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
                
                <Parallax id={`shit${id}`} className={'w-full lg:w-8/12 center relative'}>
                    <div className={`absolute w-full h-full border border-blue-900 border-2 rounded-3xl ${className ? ' -left-[15px]' : ' -right-[15px]'}  scale-90 -bottom-[15px]`}>

                    </div>

                    <img src={img} alt="" className={` w-fit h-full rounded-3xl scale-90 ${className ? 'translate-x-[10px]' : '-translate-x-[10px]'}  -translate-y-[10px]`}/>
                </Parallax>
           
            </div>
        </div>
    )
}