import { useEffect, useRef, useState } from "react"
import { HeroContent } from '../../assets/Constants'
import { Button } from "../../Components/Button"



const Hero = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX)
    }
    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - startX
        const threshold = 100;
        if(Math.abs(deltaX) > threshold){
            slide()
        }else if(deltaX< 0 && currentSlide < HeroContent.length - 1){
            setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
        }
    }

    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 4000);
        return () => clearInterval(int)
    }, [currentSlide])
    const slide = () => {
        setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
}


    return(
        <div className="relative center w-full h-screen  overflow-hidden">
            <div className="absolute hidden lg:block lg:flex flex w-full justify-between items-center z-20">

                <div className="bi bi-chevron-left text-5xl text-gray-300 cursor-pointer h-[250px] center rounded-full w-[100px] lg:w-[150px] p-6 rounded-r-3xl transition-all duration-1000 hover:bg-black hover:bg-opacity-20"  onClick={() => setCurrentSlide(currentSlide == 0 ? HeroContent.length - 1 : prev => prev - 1)}></div>

                <div className="bi bi-chevron-right text-5xl text-gray-300 cursor-pointer h-[250px] center rounded-full w-[100px] lg:w-[150px] p-6 rounded-l-3xl transition-all duration-1000 hover:bg-black hover:bg-opacity-20"  onClick={() => 
                    setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
                    }></div>


            </div>

                <XlSlider currentSlide={currentSlide} />
                <SmSlider currentSlide={currentSlide} sliderRef={sliderRef} handleTouchEnd={handleTouchEnd} handleTouchStart={handleTouchStart}/>

            <div className="center absolute gap-3 bottom-[50px] lg:bottom-12 z-20">
                {
                    HeroContent.map((i, j) => (
                        <p key={j} className={`${currentSlide == j ? 'h-5 w-5 bg-blue-900' : 'w-3 h-3 bg-blue-100'} border border-blue-300 rounded-full transition-all duration-500 cursor-pointer`} onClick={() => setCurrentSlide(j)}></p>
                    ))
                }
            </div>
        </div>
    )
}


const XlSlider = ({currentSlide}) => {
    return(
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex justify-between flex-col lg:flex-row items-center z-10 gap-[10ch] text-gray-100 hidden lg:block lg:flex z-20">
                <div className="overflow-hidden w-8/12 h-screen">

                    <div className={`flex flex-col w-full transition-all duration-1000 h-screen`} style={{
                        height: HeroContent.length*100+'vh',

                        transform: `translateY(-${currentSlide}00vh)`
                    }}>

                        {
                            HeroContent.map((content, i) => (
                                <div key={i} className="flex flex-col h-screen justify-center gap-4">

                                    <h1 className="text-5xl text-blue-600">{content.header}</h1>
                                    <div className="text-gray-20 text-sm tracking-wide leading-relaxed ">{content.text}</div>
                                    <Button text={'Get A Quoute'} className="w-fit" icon={'card-checklist'}/>

                                </div>
                            ))
                        }
                    </div>
                </div>
                
                
                
                <div className="overflow-hidden flex items-end w-5/12 h-screen">

                    <div className={`flex flex-col-reverse items-end w-full transition-all duration-1000 `} style={{
                        height: HeroContent.length*100+'vh',

                        transform: `translateY(${currentSlide}00vh)`
                    }}>

                        {
                            HeroContent.map((content, i) => (
                                <div key={i} className="center w-full overflow-hidden rounded-xl h-screen">
                                    <img src={content.img} alt="" className="w-full h-fit rounded-xl"/>
                                </div>
                            ))
                        }
                    </div>
                </div>                
            </div>
    )
}
const SmSlider = ({currentSlide, sliderRef, handleTouchStart, handleTouchEnd}) => {
    return(
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex justify-center flex-col items-center z-10 text-gray-100 lg:hidden gap-9 z-20" 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
        >
            <div className="overflow-hidden w-full flex justify-start h-fit pt-[9ch]">

                <div className={`flex transition-all duration-1000 `} style={{
                    width: HeroContent.length*100+'vw',
                    transform: `translatex(-${currentSlide}00vw)`
                }}>

                    {
                        HeroContent.map((content, i) => (
                            <div key={i} className="flex flex-col  justify-center w-[100vw] gap-4">

                                <h1 className="text-5xl text-blue-600 w-11/12">{content.header}</h1>
                                <div className="text-gray-20 text-sm tracking-wide leading-relaxed w-11/12">{content.text}</div>
                                <Button text={'Get Your Website Now'} className="w-fit" icon={'card-checklist'}/>

                            </div>
                        ))
                    }
                </div>
            </div>
            
            
            
            <div className="overflow-hidden w-full flex justify-end max-h-72 md:max-h-84 items-start rounded-xl">

                <div className={`flex transition-all duration-1000 h-fit`} style={{
                        width: HeroContent.length*100+'vw',
                        transform: `translatex(${currentSlide}00vw)`
                }}>

                    {
                        HeroContent.map((content, i) => (
                            <div key={i} className="flex flex-col  justify-start items-start w-[100vw] gap-4 h-fit">
                                <img src={content.img} alt="" className="w-full h-fit rounded-xl "/>
                            </div>
                        ))
                    }
                </div>
            </div>                
        </div>
    )
}


export { Hero}