import { useContext } from 'react'
import { AppContext } from '../App'
import { Parallax } from './Parallax'

export const ImageAndText = ({id, title, desc, img}) => {
    const { mediumScreen } = useContext(AppContext)
    return(
        
        <div className='flex justify-center my-9 pt-9 text-black h-90 items-center'>
            <div className={`flex bg-blue-fade items-center my-9 ${mediumScreen ? 'flex-wrap w-11/12 py-9' : 'w-9/12 p-9'}`}>
                <div className={`${mediumScreen ? 'w-full items-center' : 'px-6 w-9/12'}  flex flex-col gap-4 `}>
                    <Parallax id={`shit${id}`}>
                    <h2 className={`font-bold text-3xl ${mediumScreen ? 'text-center' : ''}`}>{title}</h2>
                    </Parallax>
                    
                    <Parallax id={`shiet`}>
                    <p className={`small-lg text-gray-900 ${mediumScreen ? 'text-center mx-3' : 'text-justifyk'}`}>{desc}
                    </p>
                    </Parallax>
                    
                    <div className={`z-10 rounded-full h-full w-fit noBgButton  font-bold  bg-orange border-white  button px-6 py-3 small cursor-pointer transition-all duration-1000`} onClick={() => {
                        document.querySelector('#Contact').scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>
                        GET STARTED
                    </div> 
                </div>
            <div className={`animateHeroImg w-full flex items-end justify-center ${mediumScreen ? 'my-9' : ''}`}>
            <Parallax id={`shit${id}`}>

                <img src={img} alt="" className={`w-full`}/>
            </Parallax>
            </div>
           
            </div>
        </div>
    )
}