import { useEffect } from "react"
import { useState } from "react"

export const AfterHeroComponent = ({reason, i}) => {
    const [ showDesc, setShowDesc ] = useState(false)
    const [ descClass, setDescClass ] = useState(0)

    useEffect(() => {
        if(i == 0){
            setShowDesc(true)
        }
    }, [])
    const handleToggleDesc = () => {
        if(showDesc){
            setTimeout(() => {
                setShowDesc(false)
            }, 140);
        }else{
            setShowDesc(true)
        }
    }
    return(
        <div  className={`flex flex-col ${showDesc ? 'rounded-xl' : 'rounded-full'} gap- transition duration-300 shadow-lg overflow-hidden cursor-pointer `} style={{
            minWidth: '300px',

        }} onClick={() =>{
            handleToggleDesc()
            setDescClass(showDesc ? 'hideDesc' : 'showDesc')
        }}>
            <div className='flex gap-2 bg-blue-fade p-3'>
                <p className='bg-orange shadow-xl rounded-full flex items-center justify-center text-white' style={{
                    width: 30+'px',
                    height: 30+'px',
                }} >
                    <i className={`bi bi-chevron-${showDesc ? 'up' : 'down'} `}></i>
                </p>
                <p className=''>
                    {reason.title}
                </p>

            </div>
            {
                showDesc ?
                <div className={`p-3 small-lg text-justify ${descClass}`} >

                    {reason.desc}
                </div> : ''
            }
        </div>
    )
}