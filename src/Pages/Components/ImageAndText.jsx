
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'
import { useNavigate } from 'react-router-dom'

export const ImageAndText = ({id, title, desc, img, className, iconText, icon, scrollTo, navigateTo}) => {
    const navigate = useNavigate()
    return(
        
        <section id={id} className='flex justify-center my-[20vh] lg:my-[5vh] text-gray-100 lg:min-h-[80vh] items-center border-t border-blue-900'>
            
            <div className={`center ${className ? className : 'flex-col lg:flex-row'} w-11/12 lg:w-10/12 xl:w-9/12 gap-[5ch]`}>
                <div className={`flex flex-col gap-4 lg:w-10/12`}>
                    <Parallax id={`shit${id}`}>
                        <h2 className={`text-3xl text-blue-600`}>{title}</h2>
                    </Parallax>
                    
                    <Parallax id={`shiet${id}`}>
                        <div className={`text-gray-300 tracking-wide leading-relaxed gap-2 flex flex-col`}>
                        {
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
                    <div className={`absolute w-full min-h-[35vh] h-full border border-blue-900 border-2 rounded-3xl ${className ? ' -left-[15px]' : ' -right-[15px]'}  scale-90 -bottom-[15px]`}>

                    </div>

                    <LazyLoadImage
                         src={img} 
                         placeholderSrc={'Image to describe ' + title} 
                         className={` w-fit h-full rounded-3xl scale-90 ${className ? 'translate-x-[10px]' : '-translate-x-[10px]'}  -translate-y-[10px]`}
                         effect='blur'
                    />
                </Parallax>
           
            </div>
        </section>
    )
}