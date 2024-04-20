
import { Button } from '../../Components/Button'
import { Parallax } from '../../Components/Parallax'


export const ImageAndText = ({id, title, desc, img, className, iconText, icon}) => {
    return(
        
        <div className='flex justify-center my-[12ch] pt-[9ch] text-gray-100 h-fit -90 items-center border-t border-blue-900'>
            
            <div className={`center ${className ? className : 'flex-col lg:flex-row'} w-11/12 lg:w-10/12 xl:w-9/12 gap-[7ch]`}>
                <div className={`flex flex-col gap-4 lg:w-7/12`}>
                    <Parallax id={`shit${id}`}>
                        <h2 className={`text-3xl text-blue-600`}>{title}</h2>
                    </Parallax>
                    
                    <Parallax id={`shiet${id}`}>
                        <p className={`small-lg text-gray-300 tracking-wide leading-relaxed `}>{desc}
                        </p>
                    </Parallax>
                    <Parallax id={`btn${id}`}>
                    <Button text={iconText} icon={icon} className={'w-fit'}/>
                    </Parallax>
                    
                </div>
                
                <Parallax id={`shit${id}`} className={'w-full lg:w-5/12 center'}>
                    <div className={`center overflow-hidden w-10/12`}>
                        {/* <div className="w-[250px] h-[250px] rounded-tl-[70px] rounded-br-[70px] rotate-[45deg] border border-gray-100 overfl ow-hidden center"> */}
                            <img src={img} alt="" className={` w-fit ull h-full rounded-tl-[100px ] rounded-bl-[200px] rounded-tr-[200px] rounded-br-[100p x]`}/>

                        {/* </div> */}
                    </div>
                </Parallax>
           
            </div>
        </div>
    )
}