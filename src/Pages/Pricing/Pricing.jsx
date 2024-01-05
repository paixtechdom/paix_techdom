import { Title } from "../../Components/Title"
import { Prices } from "../../assets/Constants"
import { useContext } from "react"
import { AppContext } from "../../App"
import { Parallax } from "../../Components/Parallax"
import { Link } from "react-router-dom"


export const Pricing = () => {

    const { mediumScreen, smallScreen, setSubject } = useContext(AppContext)

    return(
        <div id="Pricing" className="section flex flex-col items-center bg-blue-fade pb-9">
            <Title title={'Pricing'} icon={'tags'}/>
        
            
            <div className={`${mediumScreen ? 'flex flex-col w-11/12 ' : 'grid grid-cols-3 w-10/12'} gap-6 `}>
                {
                    Prices.map((price, key) => (
                        <div key={key} className='bg-white border-blu mb-8 shadow-xl flex flex-col justify-between'>
                                <div className={`flex flex-col ${key == 2 || key == 0 ? 'bg-blue text-white' : 'bg-orange ' } p-5 py-9 `}>
                                    
                                    <h2 className="text-center font-bol text-2xl">{price.title}</h2>
                                    <div className="text- flex items-star justify-center ">
                                        <p className="text-l">$</p> 
                                        <p className="font-bold text-3xl">{price.price}</p>
                                        <div className={`flex items-end   ${key == 2 || key == 0 ? 'text-gray-300' : 'text-gray-900' }`}>
                                            <p>/project</p>
                                        </div>
                                    </div>

                                </div>
                         
                                <div className="flex align-start h-full">
                                    <div className="my-9 px-7 flex flex-col ">

                                        {
                                            price.features.map((feature, ky) =>(
                                                <Parallax key={ky} id={`${price.title.split(' ').join('')}`}>
                                                <div className='text-sm my-4 text-gray-800 flex items-center bg-blue-30 gap-3'>
                                                    <i className={`flex items-center justify-center rounded-full bg-gray-50 shadow-lg p-2 bi bi-hand-index `} 
                                                    style={{
                                                        width: 30+'px',
                                                        height: 30+'px',
                                                        transform: 'rotateZ(90deg) translateY(-2px)'

                                                    }}></i>    
                                                    <p>{feature}</p>
                                                </div>
                                                </Parallax>
                                            ))
                                        }
                                    </div>

                                </div>

                            <div className="text-center mb-9 pb-5" onClick={() => setSubject(`I need a ${price.title}`)}>
                            <Parallax id={`${price.title.split(' ').join('')}`}>
                                <a href="#Contact" className={`z-10 rounded-full h-full w-fit noBgButton ${key == 2 || key == 0 ? 'bg-orange' : 'bg-blue text-white'} font-bold  bg-transparent  button px-6 py-3 small`}>
                                    Order Now
                                </a> 
                            </Parallax>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div className="flex justify-center text-center  w-full"  onClick={() => {
                    setSubject('')
                }}>

                    <a href='#Contact' className={`z-10 rounded-full h-full ${ smallScreen ? 'w-11/12' : mediumScreen ? 'w-8/12' : !mediumScreen ? 'w-5/12' : '' } noBgButton bg-blue shadow-xl font-bold  text-white  button px- py-4 my-5 mb-9`}>
                        <Parallax id={`orderothers`}>
                        Contact us for other services
                        </Parallax>
                    </a> 
                  
                
                </div>

        </div>
    )
}