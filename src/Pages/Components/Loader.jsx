import { useEffect } from "react"
// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import  "react-lazy-load-image-component/src/effects/blur.css"
// import  "react-lazy-load-image-component/src/effects/opacity.css"


export const Loader = () => {
    
    return(
        <div className="fixed bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)] center w-full h-screen top-0 left-0 flex-col z-50">
                  
            <p className="font-bold text-2xl text-gray-100 mt-9">Paix Techdom</p>

            <div className="mt-9 text-sm">add a loader icon</div>
        </div>
    )
}