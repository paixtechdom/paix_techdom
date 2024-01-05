import { useContext } from 'react'
import { AppContext } from '../App'
import { Parallax } from './Parallax'

export const ImageAndText = ({id, title, desc, img}) => {
    const { mediumScreen } = useContext(AppContext)
    return(
        
        <div className='flex justify-center my-9 pt-9 text-black h-90 items-center'>
            <div className={`flex bg-blue-fade items-center p-9 my-9 ${mediumScreen ? 'flex-wrap w-11/12' : 'w-10/12'}`}>
            <Parallax id={`shit${id}`}>
                <div className={`${mediumScreen ? 'w-full items-center' : 'px-6 w-10/12'}  flex flex-col gap-4 `}>
                    <h2 className={`font-bold text-3xl ${mediumScreen ? 'text-center' : ''}`}>{title}</h2>
                    <p className={`small-lg text-gray-900 ${mediumScreen ? 'text-center' : 'text-justify'}`}>{desc}
                    </p>
                    
                    <a href={'#Contact'} className={`z-10 rounded-full h-full w-fit noBgButton  font-bold  bg-orange border-white  button px-6 py-2 small`}>
                        GET STARTED
                    </a> 
                </div>
            </Parallax>
            <div className={`animateHeroImg w-full flex items-end justify-center ${mediumScreen ? 'my-9' : ' scale-125'}`}>
            <Parallax id={`shit${id}`}>

                <img src={img} alt="" className={`w-full`}/>
            </Parallax>
            </div>
           
            </div>
        </div>
    )
}