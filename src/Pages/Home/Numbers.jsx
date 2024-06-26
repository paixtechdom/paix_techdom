import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import { numbers } from '../../assets/Constants'
import { Parallax } from '../../Components/Parallax'

export const Numbers = () => {

    return(
        
        <section className='flex justify-center w-full my-9 py-9'>
            <div className={`flex md:grid md:grid-cols-2 items-center lg:flex w-11/12 lg:w-9/12 lg:flex-row justify-center flex-col gap -5`}>
                {
                    numbers.map((no, key) => (
                        
                        <No no={no} key={key} />
                        
                        ))
                    }
            </div>
        </section>
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
        <div className={`center m-auto flex-col gap-2 shadow-lg transition-all duration-1000 hover:scale-90 p -9 relative h-[16ch] w-[16ch]`}>
            
            <div className="w-full h-full rounded-tl-[10ch] rounded-br-[10ch] border border-blue-900 absolute top-0 left-0 rotate-[45deg]"></div>
            
            <Parallax id={no.title}>

                <p className='text-3xl text-blue-400 text-center'>{newNo}+</p>
                <div className='flex items-center text-gray-300 gap-2 my-2 text-sm'>
                    <i className={`bi bi-${no.img} text-2xl`}></i>
                    <p >{no.title}</p>

                </div>
            </Parallax>
    </div>
    )
}