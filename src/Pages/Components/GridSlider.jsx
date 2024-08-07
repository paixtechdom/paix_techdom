import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../App"

export const GridSlider = ({data}) =>{

return(
        <section className="flex flex-col items-center my-[10vh] overflow-hidden border border-blue-900">

        <div  className={`grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-9/12 gap-9`}>

            {
                data.map((d, i) => (
                    <Parallax key={i} id={d.id} className='h-full flex flex-col border border-blue-900 bg-secondary bg-opacity-30 p-5 md:p-9 rounded-xl gap-2 leading-relaxed tracking-wide' index={i}>
                        
                        <div className="flex relative w-fi center h-12 md:h-16 w-2/12 md:w-3/12 p-3 mb-3">
                            <div className="absolute border border-blue-900 top-0  left-50 w-12 h-12 md:w-16 md:h-16 rotate-45 rounded-tl-[25px]  rounded-br-[25px]">

                            </div>
                            <i className={`bi bi-${d.icon} text-2xl md:text-4xl text-blue-400`}></i>
                        </div>

                        <h2 className="text-blue-600 text-xl">
                            {d.title}
                        </h2> 
                        <p className="text- md text-gray-300">
                            {d.desc}
                        </p>
                    </Parallax>
                ))
            }

        </div>
                  
        </section>

    )
}


const Parallax = ({id, children, className, index}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)

    const handleScroll = () => {
        const element = document.querySelector(`#${id}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top > -150 && pos.top < 1100){
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
            <div className={`relative  transition-all duration-1000 ${!isPosMatch ? `${index == 0 || index == 2 || index == 4 || index == 6 ? '-translate-x-[25vw] opacity-0' : 'translate-x-[25vw] opacity-0'} ` : ''} ${className}`}>
                {children}
            </div>
        </div>
    )
}