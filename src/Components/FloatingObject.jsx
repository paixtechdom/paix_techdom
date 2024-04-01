import { useEffect } from 'react'
import './Float.css'
import { useState } from 'react'

export const FloatingObject = ({text}) => {
    
    const [ pos, setPos ] = useState({ x: 150, y: 150 })


    useEffect(() => {
        const interval = setInterval(() => {
            moveObj()    
        }, 5000);

        return(() => clearInterval(interval))
    }, [])

    const moveObj = () => {
        const q = parseInt((Math.random() * 100).toFixed())
        let x = Math.ceil(q / 10) * 10
        
        const p = parseInt((Math.random() * 100).toFixed())
        let y = Math.ceil(p / 10) * 10
        
        setPos({
            ...pos,
            x: x,
            y: y,
        })
        // console.log(pos)
        
    }
    return(
            <div className={`absolute animate animation-all duration-[7s] animate-pulse inset-3 z-50 rounded-full text-gray-100 p-2 flex items-center justify-center cursor-pointer text-[15px] text-gray-400 w-fit h-fit active:animate-ping `} style={{
                top: pos.y+'%',
                left: pos.x+'%',
                zIndex: 300
                // height: s+'px',
                // width: s+'px',
            }}
            onClick={() => {
                const e = document.querySelector('#Contact')
                e.scrollIntoView({
                    behavior: 'smooth'
                })
            }}>
              {text}
            </div>

    )
}