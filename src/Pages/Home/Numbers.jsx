import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import { numbers } from '../../assets/Constants'
import { Parallax } from '../../Components/Parallax'

export const Numbers = () => {
    const { mediumScreen, smallScreen } = useContext(AppContext)

    return(
        <Parallax id='numbers'>

        <div className='flex justify-center w-full my-9 py-9'>
            <div className={`flex justify-center items-center ${mediumScreen ? 'w-11/12 grid grid-cols-2 gap-y-9' : 'w-10/12 flex justify-between'}`}>
                {
                    numbers.map((no, key) => (
                        <No no={no} key={key} mediumScreen={mediumScreen} smallScreen={smallScreen}/>
                        ))
                    }
            </div>
        </div>
        </Parallax>
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
        <div className={`flex m-auto flex-col gap-2 justify-center items-center bg-gray-10 shadow-lg ${smallScreen ? 'w-8/12' : mediumScreen ? ' w-5/12' : 'w-2/12'} p-5 relative overflow-hidden rounded-xl`}>
            <div className="absolute top-0 left-0 bg-blue rounded-br-full z-10" style={{
                height: 15+'px',
                width: 15+'px',
            }}>

            </div>
            <div className="absolute top-0 left-0 bg-blue-900 rounded-br-full" style={{
                height: 25+'px',
                width: 25+'px',
            }}>

            </div>
            <p className='text-3xl font-bold text-blue'>{newNo}+</p>
            <div className='flex items-center gap-2'>
                <i className={`bi bi-${no.img} text-2xl`}></i>
                <p>{no.title}</p>

            </div>
    </div>
    )
}