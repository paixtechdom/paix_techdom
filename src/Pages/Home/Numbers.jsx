import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import { numbers } from '../../assets/Constants'
import { Parallax } from '../../Components/Parallax'

export const Numbers = () => {
    const { mediumScreen, smallScreen } = useContext(AppContext)

    return(
        
        <div className='flex justify-center w-full my-9 py-9'>
            <div className={`flex justify-center items-center ${mediumScreen ? 'w-11/12 grid grid-cols-2 gap-y-9' : 'w-9/12 flex justify-between'}`}>
                {
                    numbers.map((no, key) => (
                        
                        <No no={no} key={key} mediumScreen={mediumScreen} smallScreen={smallScreen}/>
                        ))
                    }
            </div>
        </div>
    )
}


const No = ({no, mediumScreen, smallScreen}) => {
    const [ newNo, setNewNo ] = useState(0)

    useEffect(() => {
        const int = setInterval(() => {
            read()
        }, no.speed);
        return () => clearInterval(int)
    }, [newNo])

    const read = () => {
        setNewNo(newNo == no.no ? no.no : newNo + 1)
    }
   
    return(
        <div className={`flex m-auto flex-col z-20 gap-2 justify-center items-center bg-gray-10 shadow-lg transition-all duration-1000 hover:animate-pulse hover:bg-gray-200 ${smallScreen ? 'w-10/12' : mediumScreen ? ' w-8/12' : 'w-2/12'} p-5 relative overflow-hidden rounded -xl`}>
            <div className="absolute bottom-0 right-0 bg-blue rounded-tl-full z-20" style={{
                height: 25+'px',
                width: 25+'px',
            }}>

            </div>
            <div className="absolute bottom-0 right-0 bg-blue-900 rounded-tl-full z-10" style={{
                height: 35+'px',
                width: 35+'px',
            }}>
                </div>
            <div className="absolute bottom-0 right-0 bg-blue-400 rounded-tl-full" style={{
                height: 45+'px',
                width: 45+'px',
            }}>

            </div>
            <Parallax id={no.title}>

                <p className='text-3xl font-bold text-blue'>{newNo}+</p>
                <div className='flex items-center gap-2 my-2'>
                    <i className={`bi bi-${no.img} text-2xl`}></i>
                    <p>{no.title}</p>

                </div>
            </Parallax>
    </div>
    )
}