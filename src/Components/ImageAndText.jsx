import { useContext } from 'react'
import { AppContext } from '../App'
import { Parallax } from './Parallax'
import { Button } from './Button'

export const ImageAndText = ({id, title, desc, img}) => {
    const { mediumScreen } = useContext(AppContext)
    return(
        
        <div className='flex justify-center my-[12ch] pt-[9ch] text-gray-100 h-90 items-center border-t border-blue-900'>
            
            <div className={`flex flex-col lg:flex-row w-11/12 lg:w-9/12`}>
                <div className={`flex flex-col gap-4 `}>
                    <Parallax id={`shit${id}`}>
                    <h2 className={`text-3xl text-blue-400`}>{title}</h2>
                    </Parallax>
                    
                    <Parallax id={`shiet${id}`}>
                    <p className={`small-lg text-gray-300 tracking-wide leading-relaxed `}>{desc}
                    </p>
                    </Parallax>
                    
                    <Button text={'Get Your website now'} icon={'arrow-down'} className={'w-fit'}/>
                </div>
            <div className={`w-full flex items-end justify-center mt-9`}>
            <Parallax id={`shit${id}` }>

                <img src={img} alt="" className={`w-full`}/>
            </Parallax>
            </div>
           
            </div>
        </div>
    )
}