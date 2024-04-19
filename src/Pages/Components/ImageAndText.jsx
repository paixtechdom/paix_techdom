
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'


export const ImageAndText = ({id, title, desc, img, className, iconText, icon}) => {
    return(
        
        <div className='flex justify-center my-[12ch] pt-[9ch] text-gray-100 h-90 items-center border-t border-blue-900'>
            
            <div className={`flex ${className ? className : 'flex-col lg:flex-row'} w-11/12 lg:w-10/12 xl:w-9/12 gap-[7ch]`}>
                <div className={`flex flex-col gap-4 lg:w-7/12`}>
                    <Parallax id={`shit${id}`}>
                        <h2 className={`text-3xl text-blue-400`}>{title}</h2>
                    </Parallax>
                    
                    <Parallax id={`shiet${id}`}>
                        <p className={`small-lg text-gray-300 tracking-wide leading-relaxed `}>{desc}
                        </p>
                    </Parallax>
                    <Parallax id={`btn${id}`}>
                    <Button text={iconText} icon={icon} className={'w-fit'}/>
                    </Parallax>
                    
                </div>
                
                <div className={`lg:w-5/12 flex items-center justify-center`}>
                    <Parallax id={`shit${id}`} className={'bg-red-200'}>
                        <img src={img} alt="" className={`w-full`}/>
                    </Parallax>
                </div>
           
            </div>
        </div>
    )
}