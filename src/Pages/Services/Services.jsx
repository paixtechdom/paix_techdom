import { Title } from "../../Components/Title"

import { ServicesInfo } from "../../assets/Constants"
import { Parallax } from "../../Components/Parallax"

export const Services = () =>{

   
    return(
        <div id="Services" className="bg-blue-fade flex flex-col items-center  my-9 py-9">
        
            <Title title={'Services'} icon={'hdd-stack'}/>
            

            <div className="flex w-11/12 mb-9">
                <div className="flex flex-wrap rounded-lg text-justify br">
                    {
                        ServicesInfo.map((service, key) => (
                            <Parallax key={key} id={`${service.icon.split(' ').join('')}`}>
                            
                            <div  className='flex justify-center items-center flex shadow-g rounded-lg p-3 pt-9 border-blue-2  text-blue-10 overflow-hidden relative w-full shadow-xl'>
                                
                                <div className="w-11/12 flex flex-col items-start">
                                <div className="flex justify-center items-center overflow-hidden rounded-full shadow-lg bg-blue" style={{
                                    height: 50+'px',
                                    width: 50+'px',
                                }}>
                                    <i className={`bi bi-${service.icon} text-3xl text-white`}></i>
                                </div>
                                <h2 className='font-bold my-3 text-xl text-blue text-gray-700'>{service.title}</h2>
                                 <Parallax id={`${service.icon.split(' ').join('')}`}>
                                    <p className="small-lg">{service.desc}</p>
                                </Parallax>
                                </div>
                            </div>
                                </Parallax>
                        ))
                    }
                </div>

            </div>
        </div>

    )
}