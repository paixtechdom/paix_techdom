import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import { ourOfffers } from '../../assets/Constants'
import { Parallax } from '../../Components/Parallax'
export const WeOffer = () => {
    const [ currentOffer, setCurrentOffer ] = useState(0)
    const { mediumScreen } = useContext(AppContext)

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide('interval')
      }, 6000); 
      // Change slide every 6 seconds
      return () => clearInterval(interval);
    }, [currentOffer]);
      
    const nextSlide = (curr) =>{
      if(curr == 'interval'){
        setCurrentOffer(currentOffer == 3 ? 0 : currentOffer + 1)
      }else{
        setCurrentOffer(curr) 
      }
    }

 
    return(
        <div id='Services' className='section flex justify-center items-center w-full my-9 py-9 bg-blue'> 
            <div className={`flex flex-col ${mediumScreen ? 'w-11/12' : 'w-10/12'} mt-9 py-9`}>
                <Parallax id={'offerNav'}>
                <div className=" nav flex w-full justify-center border-bottom-orange">
                        <div className="flex w-full justify-between borde ounded-xl overflow-hidden items-center">

                    {
                        ourOfffers.map((offer, key) => (
                            <div key={key} className={`p-2 flex flex-col items-center w-full justify-center cursor-pointer rounded-x text-gray-200 rounded-xl ${currentOffer == key ? '' : ''}`} onClick={() => setCurrentOffer(key)}
                            style={{
                                backgroundColor : currentOffer == key ? 'rgb(0,0,0, 0.4)' : ''
                            }}>
                                    <i className={`bi bi-${offer.icon}`}></i>
                                    <span className={`small p-0 m-0 `}>{offer.name}</span>
                                </div>
                            ))
                        }
                        </div>

                </div>
                </Parallax>
                <div className=' overflow-hidden w-full'>
                    <div className="flex justify-between gap- duration-1000 transition-all" style={{
                        width: 400+'%',
                        transform: `translate(-${currentOffer * 25}%)`
                    }}>
                        {
                            ourOfffers.map((offer, key) => (

                                <div key={key} className={`flex w-full text-gray-100 my-3 mt-6 ${mediumScreen ? 'flex-wrap' : ''}`}>
                                    <div className={` ${mediumScreen ? 'w-full' : 'w-10/12'} px- flex flex-col gap-4 small-lg`}>
                                        <Parallax id={'offerdesc'}>
                                            <div className='text-'>
                                            <p>{offer.desc}</p>
                                            </div>

                                        </Parallax>
                                        <div className='flex gap-1 text-xl w-fit font-bold text-gray-100'>
                                            <p>{offer.wedo} </p> <i className="text-lg bi bi-hand-index-fill" style={{
                                                transform: 'rotateZ(180deg) translateY(-2px)'
                                            }}></i>
                                        </div>
                                        <Parallax id={'offers'}>
                                            <div className="flex flex-col mx-4 gap-5">

                                                {
                                                    offer.subOffers.map((subOffer, key) => (
                                                        <div className="flex gap-2 items-center" key={key}>
                                                            <i className={`text-blue flex items-center justify-center rounded-full bg-gray-50 shadow-lg bi bi-check`} style={{
                                                                width: 20+'px',
                                                                height: 20+'px',
                                                            }}></i>
                                                            <h3>{subOffer.name}</h3>
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </Parallax>
                                        <div className='flex gap-2 w-full justify-ed'>
                                        <a href='#Contact' className='text-right rounded-full p-3 px-5 font-bold bg-orange text-black small'>
                                        GET STARTED</a>    
                                        </div>
                                    </div>
                                    <div className={`animateHeroImg bg-gray-80 flex items-center justify-center ${mediumScreen ? 'my-9 w-full' : ' scale-12 w-8/12'}`}>
                                        <img src={offer.img} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                
            </div>           
        </div>
    )
}