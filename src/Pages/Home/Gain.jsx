import { Gain as Gaain } from "../../assets/Constants"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../App"

export const Gain = () =>{
    const [ currentIndex, setCurrentIndex  ]  = useState(0)

return(
        <div className="flex flex-col items-center mt-9 pt-9 overflow-hidden" id='About'>
    
                  
        <div  className={`grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-9/12 gap-9`}>

            {
                Gaain.map((reason, i) => (
                    <Parallax key={i} id={reason.id} className='flex flex-col border border-blue-900 p-9 rounded-xl gap-2  heading-relaxed tracking-wide' index={i}>
                        <i className="bi bi-check-circle-fill text-5xl bg-blue-900 text-gray-100 w-fit rounded-full center mb-3"></i>
                        <p className="text-blue-400">{reason.title}</p>
                        <p className="text-sm text-gray-200">{reason.desc}</p>
                    </Parallax>
                ))
            }

        </div>
                  
        </div>

    )
}


const Parallax = ({id, children, className, index}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)

    const handleScroll = () => {
        const element = document.querySelector(`#${id}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top > -10 && pos.top < 900){
                setIsPosMatch(true)
            } else{
                setIsPosMatch(false)
            }

        }
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div id={id} className={`relative `}>
            <div className={`relative  transition-all duration-[1s] ${!isPosMatch ? `${index == 0 || index == 2 || index == 4 || index == 6 ? '-translate-x-[100vw]' : 'translate-x-[100vw]'} ` : 'translate-x-[0px]'} ${className}`}>
                {children}
            </div>
        </div>
    )
}