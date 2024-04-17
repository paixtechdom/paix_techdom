import { useEffect } from "react"
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import  "react-lazy-load-image-component/src/effects/blur.css"
// import  "react-lazy-load-image-component/src/effects/opacity.css"


export const Loader = () => {
    useEffect(() => {

    }, [])
    return(
        <div className="fixed bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] center w-full h-screen top-0 left-0 flex-col">
            <div className="animate-spin center border border-gray-100 h-[100px] w-[100px] rounded-full">
                <div className="animate-spin center bg-blue-900 h-[60px] w-[95px] rounded-full bg-gradient-to-l from-[rgba(0,0,80)] via-[rgba(220,220,225,0.6)] to-[rgba(0,0,80)]">
                    
                </div>
            </div>
            <p className="font-bold text-2xl text-gray-100 mt-9">Paix Techdom...</p>
        </div>
    )
}