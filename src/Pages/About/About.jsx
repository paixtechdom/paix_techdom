import { Parallax } from "../../Components/Parallax"
import { Title } from "../../Components/Title"
import { AboutInfo, AfterHero } from "../../assets/Constants"
import { useContext } from "react"
import { AppContext } from "../../App"
import { AfterHeroComponent } from "../Home/AfterHeroComponent"

export const About = () =>{
    const { mediumScreen } = useContext(AppContext)
    return(
        <div className="flex flex-col items-center mt-9 pt-9" id='About'>
        
            {/* <Title title={'About'} icon={'person'}/> */}
 
            <div className={`flex bg-cente relative ${mediumScreen ? 'w-11/12' : 'w-9/12'}`}>
                
                <div className="flex flex-wrap flex-col z-10">
                   
                    <Parallax id='AboutText'>
                    <p className=" small-lg my-3 text-justify text-gray-900"> <span className="text-lg font-bold text-gray-800">{AboutInfo.title}</span> {AboutInfo.p1}</p>
                    </Parallax>
                    <Parallax id='AboutText2'>
                    <p className=" small-lg  text-justify text-gray-900">{AboutInfo.p2}</p>
                    </Parallax>


                    <Parallax id='wehelp'>
                    <h2 className="text-xl font-bold mt-5 text-gray-800">We help you </h2>
                    </Parallax>
                    <div  className={`flex justify-center `}>

                        <div className={`w-full flex flex-col justify-between my-9 gap-5`} style={{
                        }}>

                        {
                            AfterHero.map((reason, key) => (
                                <Parallax key={key} id={reason.title.split(" ").join('').toLowerCase()}>
                                
                                    <AfterHeroComponent reason={reason} i={key}/>
                                </Parallax>
                            ))
                        }

                        </div>
                    </div>
                    <div className={`flex justify-start`}>
                        <div className={`z-10 rounded-full h-full w-fit noBgButton  font-bold  bg-orange  button px-6 py-3 text-black small cursor-pointer transition-all duration-1000`} onClick={() => {
                            document.querySelector('#Contact').scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}>
                            GET STARTED
                        </div> 
                            
                    </div>                     
                </div>

            </div>
        </div>

    )
}