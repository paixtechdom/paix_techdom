import { Parallax } from "../../Components/Parallax"
import { Title } from "../../Components/Title"
import { AboutInfo } from "../../assets/Constants"
import { useContext } from "react"
import { AppContext } from "../../App"

export const About = () =>{
    const { mediumScreen } = useContext(AppContext)
    return(
        <div className="flex flex-col items-center mt-9 pt-9" id='About'>
        
            {/* <Title title={'About'} icon={'person'}/> */}
 
            <div className={`flex bg-cente relative ${mediumScreen ? 'w-11/12' : 'w-10/12'}`}>
                
                <div className="flex flex-wrap flex-col z-10">
                   
                    <Parallax id='AboutText'>
                    <b className="text-3xl font-bold text-gray-800">{AboutInfo.title}</b>
                    <p className=" small-lg mb-2  text-justify">{AboutInfo.p1}</p>
                    <p className=" small-lg  text-justify">{AboutInfo.p2}</p>

                    </Parallax>

                    {/* <h2 className="text-xl font-bold mt-5 text-gray-800">{AboutInfo.question}</h2> */}
                    <h2 className="text-xl font-bold mt-5 text-gray-800">We help you </h2>
                    {/* <div>
                        {
                            AboutInfo.reasons.map((reason, key) => (
                                <Parallax key={key} id={`${reason.title.split(' ').join('')}`}>
                                <div className=' my-3 flex'>
                                    <i className="bi bi-hand-index mr-3 rotate-90  w-1/12 h-fit mt-1"></i>
                                   
                                    <div>

                                    <h2 className="font-bold text-lg text-gray-800">
                                        {reason.title}
                                    </h2>

                                        <p className="pl- small-lg  text-justify">{reason.desc}</p>
                                    </div>
                                </div>
                                 </Parallax>
                            ))
                        }
                    </div> */}
                     
                </div>

            </div>
        </div>

    )
}