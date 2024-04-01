import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Testimonials } from "../../assets/Constants"
import { Parallax } from "../../Components/Parallax";
import { Title } from "../../Components/Title";

export const Testimonies = () => {
    const [ index, setIndex ] = useState(0)
    const { mediumScreen } = useContext(AppContext)
    

    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 10000);
        return () => clearInterval(int)
    }, [index])

    const slide = (i) => {
        if(i > -1){
            setIndex(i)
        }else{
            setIndex(index == Testimonials.length - 1 ? 0 : index + 1 )
        }
    }
    return(
        <div className="sectio my-9 py-9 flex flex-col items-center ">
            {/* <Title title={'Our clients said'} icon={'tags'}/> */}
            <Title title={'Reviews'} icon={'tags'}/>

            <div className="overflow-hidden w-full pb-9 relative">
                <div className="flex transiton-all duration-1000 bg-gray-10" style={{
                    width: Testimonials.length*100+'vw',
                    transform: `translate(-${index * 100}vw)`
                }}>
                    {
                        Testimonials.map((testi, key) => (
                            <Parallax key={key} id='sls'>
                            <div className="w-11/12 flex justify-center items-center text-center" style={{
                                width: 100+'vw' 
                            }}>
                                    <div className={`flex flex-col gap-4 rounded-b- xl items-center shadow-2xl relative overflow-hidden p-7 pt-9 ${mediumScreen ? 'w-11/12 mb-4' : 'w-7/12'} relative `}>
                                       
                                        <>
                                            <div className="absolute bottom-0 right-0 bg-blue rounded-tl-full z-20" style={{
                                                height: 35+'px',
                                                width: 35+'px',
                                            }}> </div>
                                            <div className="absolute bottom-0 right-0 bg-blue-900 rounded-tl-full z-10" style={{
                                                height: 55+'px',
                                                width: 55+'px',
                                            }}></div>
                                            <div className="absolute bottom-0 right-0 bg-blue-400 rounded-tl-full" style={{
                                                height: 75+'px',
                                                width: 75+'px',
                                            }}></div>
                                            <i className= "absolute top-0 left-2 text-7xl bi bi-quote  z-20 text-blue"></i>

                                            
                                        </>

                                        <p className="small-lg text-gray-900 line-lg w-10/12 pt-5">
                                        <Parallax id='slfs'>
                                            {testi.comment}
                                        </Parallax>
                                        </p>
                                        <div className="flex flex-col gap-">
                                            <div className="flex justify-center gap-2 text-orange-600 text-lg">
                                                <i className={`bi bi-star${
                                                    testi.rating > 0.99 ? '-fill' : testi.rating > 0 ? '-half' : ''
                                                }`}></i>
                                                <i className={`bi bi-star${
                                                    testi.rating > 1.99 ? '-fill' : testi.rating > 1 ? '-half' : ''
                                                }`}></i>
                                                <i className={`bi bi-star${
                                                    testi.rating > 2.99 ? '-fill' : testi.rating > 2 ? '-half' : ''
                                                }`}></i>
                                                <i className={`bi bi-star${
                                                    testi.rating > 3.99 ? '-fill' : testi.rating > 3 ? '-half' : ''
                                                }`}></i>
                                                <i className={`bi bi-star${
                                                    testi.rating > 4.99 ? '-fill' : testi.rating > 4 ? '-half' : ''
                                                }`}></i>
                                            </div>
                                            
                                            <h3 className="text-lg">{testi.name}</h3>
                                            <h4 className="text-gray-600 font-bold small">{testi.organization}</h4>

                                        </div>

                                    </div>

                            </div>
                        </Parallax>
                        ))
                    }

                </div>
                <div className="flex justify-center gap-3 mt-5"> 
                    {
                        Testimonials.map((p, key) => (
                            <Parallax id='s' key={key}>
                                <p key={key} className={`cursor-pointer shadow rounded-full ${key == index ? 'bg-blue' : 'bg-gray-300'}`} 
                                style={{
                                    height: 15+'px',
                                    width: 15+'px'
                                }} 
                                onClick={() => slide(key)}></p>
                            </Parallax>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}