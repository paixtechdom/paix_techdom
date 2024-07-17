import { useState, useEffect } from "react"


export const Parallax = ({id, children, className}) => {
    const [ isPosMatch, setIsPosMatch ] = useState(false)

    useEffect(() =>{
        const pos = document.querySelector(`#${id}`).getBoundingClientRect()
        if(pos.top < 800){
            setIsPosMatch(true)
        }
    }, [])
    const handleScroll = () => {
        const element = document.querySelector(`#${id}`)
        if(element){
            let pos = element.getBoundingClientRect()
            if(pos.top < 800){
                setIsPosMatch(true)
            }
        }
      
    }

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        
    }, [])

    return(
        <div  id={id} className={`relative  transition-all duration-1000 ${isPosMatch ? '' : 'opacity-0 scale-[0.2] top-[3vh]'} ${className}`}>
            {children}
        </div>
    )
}