import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import { numbers } from '../../assets/Constants'
import { Parallax } from '../../Components/Parallax'

export const Numbers = () => {

    return(
        
        <div className='flex justify-center w-full my-9 py-9'>
            <div className={`flex justify-center items-center $ w-11/12 lg:w-9/12 lg:flex-row lg:justify-between flex-col gap-5`}>
                {
                    numbers.map((no, key) => (
                        
                        <No no={no} key={key} />
                        
                        ))
                    }
            </div>
        </div>
    )
}


const No = ({no}) => {
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
//    table issue with display 
    return(
        <div className={`center m-auto flex-col gap-2 shadow-lg transition-all duration-1000 hover:scale-90 p-9 relative overflow- r w-5/12 lg:10/12`}>
            
            <div className="w-full h-full rounded-tl-[8ch] rounded-br-[8ch] border border-blue-900 absolute top-0 left-0 rotate-[340deg]">

                <div className="absolute bottom-0 left-0 bg-blue-900 rounded-tr-full z-20" style={{
                    height: 20+'px',
                    width: 20+'px',
                }}>

                </div>
                <div className="absolute bottom-0 left-0 bg-blue-600 rounded-tr-full z-10" style={{
                    height: 30+'px',
                    width: 30+'px',
                }}>
                    </div>
                <div className="absolute bottom-0 left-0 bg-blue-300 rounded-tr-full" style={{
                    height: 40+'px',
                    width: 40+'px',
                }}>

                </div>
            </div>
            
            <Parallax id={no.title}>

                <p className='text-4xl text-blue-400'>{newNo}+</p>
                <div className='flex items-center text-gray-400 gap-2 my-2 text-sm'>
                    <i className={`bi bi-${no.img} text-2xl`}></i>
                    <p >{no.title}</p>

                </div>
            </Parallax>
    </div>
    )
}