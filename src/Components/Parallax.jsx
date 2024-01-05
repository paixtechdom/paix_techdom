import { useState } from "react"
import { useEffect } from "react"

export const Parallax = (props) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)
    useEffect(() =>{
        
        const pos = document.querySelector(`#${props.id}`).getBoundingClientRect()
        if(pos.top < 600){
            setIsPosMatch(true)
        }      
        
    }, [])
    const handleScroll = () => {
        const element = document.querySelector(`#${props.id}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top < 600){
                setIsPosMatch(true)
            }  

        }
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div id={props.id} className="parallaxParent relative">
            {/* <h1 className={`w-fit text-3xl text-center font-bold transition-all duration-500  ${isPosMatch ? 'bg-blue text-white' : ''}`}>
                Parallax
            </h1> */}

            <div className={`relative  transition-all duration-500 ${isPosMatch ? 'animateParallax ' : 'opacity-0'}`}>
                {props.children}
            </div>
        </div>
    )
}