import { useEffect, useRef, useState } from "react"
import { HeroContent } from '../../assets/Constants'
import { Button } from "../../Components/Button"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link, Navigate } from "react-router-dom"



const Hero = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)
    
    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 10000);
        return () => clearInterval(int)
    }, [currentSlide])

    const slide = () => {
        setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
    }


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



    return(
        <section className="relative center w-full  md:h-screen  overflow-hidden">
            <div className="absolute hidden lg:block lg:flex flex w-full justify-between items-center z-20">

                <div className="bi bi-chevron-left text-5xl text-gray-300 cursor-pointer h-[250px] center rounded-full w-[100px] lg:w-[150px] p-6 rounded-r-3xl transition-all duration-1000 hover:bg-black hover:bg-opacity-20"  onClick={() => setCurrentSlide(currentSlide == 0 ? HeroContent.length - 1 : prev => prev - 1)}></div>

                <div className="bi bi-chevron-right text-5xl text-gray-300 cursor-pointer h-[250px] center rounded-full w-[100px] lg:w-[150px] p-6 rounded-l-3xl transition-all duration-1000 hover:bg-black hover:bg-opacity-20"  onClick={() => 
                    setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
                    }></div>


            </div>

                <XlSlider currentSlide={currentSlide} />
                <SmSlider currentSlide={currentSlide} sliderRef={sliderRef} handleTouchEnd={handleTouchEnd} handleTouchStart={handleTouchStart}/>

            <div className="center absolute top-[85vh] md:top-[90vh] z-20">
                <div className="center gap-3 bg-blue-900 border border-blue-900 bg-opacity-30 p-4 rounded-full px-9">
                    {
                        HeroContent.map((i, j) => (
                            <p key={j} className={`${currentSlide == j ? 'h-4 lg:h-5 w-4 lg:w-5 bg-blue-900' : 'w-3 h-3 bg-white'} border border-blue-900 rounded-full transition-all duration-500 cursor-pointer`} onClick={() => setCurrentSlide(j)}></p>
                        ))
                    }
                </div>
            </div>
        </section>
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

                                    <h1 className="text-4xl text-blue-600">{content.header}</h1>
                                    <div className="text-gray-300  tracking-wide leading-relaxed flex flex-col gap-3">{
                                        content.text.map((cont, i) => (
                                            <p key={i}>{cont}</p>
                                        ))
                                    
                                    }</div>
                                    <Link to={"/Contact"}>
                                    <Button text={'Start Now'} className="w-fit" icon={'cursor-fill'}/>
                                    </Link>

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
                                <div key={i} className="center w-full overflow-hidden rounded-3xl h-screen">
                                    <LazyLoadImage 
                                        src={content.img} 
                                        placeholderSrc={'Image for ' + content.header} 
                                        effect='blur'    
                                        className="w-full h-fit rounded-3xl"
                                    />
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
        <div className="w-11/12 flex justify-center flex-col items-center z-10 text-gray-100 lg:hidden gap-9 z-20" 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
        >
            <div className="overflow-hidden w-full flex justify-start h-fit pt-[15vh]">

                <div className={`flex transition-all duration-1000`} style={{
                    width: HeroContent.length*100+'vw',
                    transform: `translatex(-${currentSlide}00vw)`
                }}>

                    {
                        HeroContent.map((content, i) => (
                            <div key={i} className="flex flex-col  justify-center w-[100vw] gap-4">

                                <h1 className="text-3xl text-blue-600 w-[85%]">{content.header}</h1>
                                <div className="text-gray-300  tracking-wide leading-relaxed w-[90%]">{content.text}</div>
                                <Link to={"/Contact"}>
                                <Button text={'start now'} className="w-fit" icon={'cursor-fill'}
                                    func={() => Navigate()}
                                    />
                                </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
            
            
            
            <div className="overflow-hidden w-full flex justify-end max-h-96 md:max-h-96 items-start rounded-3xl">

                <div className={`flex flex-row-reverse transition-all duration-1000 h-fit`} style={{
                        width: HeroContent.length*100+'vw',
                        transform: `translatex(${currentSlide}00vw)`
                }}>

                    {
                        HeroContent.map((content, i) => (
                            <div key={i} className="flex flex-col  justify-start items-start w-[100vw] gap-4 h-fit">
                                <img src={content.img} alt={'Image for ' + content.header} className="w-full h-fit rounded-3xl "/>
                            </div>
                        ))
                    }
                </div>
            </div>                
        </div>
    )
}


export { Hero}