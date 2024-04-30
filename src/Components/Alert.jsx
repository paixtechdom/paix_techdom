import { AppContext } from '../App'
import './Alert.css'
import { useContext } from 'react'


export const Alert = ({alertMessage, setShowAlert, alertType, }) =>{
    // type success, error
    const { mediumScreen } = useContext(AppContext)
    return(
        <div className="alertParent " style={{
            zIndex: 500
        }}>
            <div className={`rounded-2xl alert bg-[rgba(0,0,10)] w-9/12 lg:w-5/12 rounded-4 ${alertType}`}>
                
                <div className={`${alertType} rounded-full flex items-center justify-center text-5xl text-white w-[80px] h-[80px]`}>
                    <i className={`bi bi-${alertType == 'success' ? 'check-lg text-green-500' : alertType == 'error' ?  'exclamation' : ''}`}></i>
                </div>

                <h3 className='font-bold text-xl'>{alertType == 'success' ? 'Sent' : 'Failed'}</h3>
                <p className='text-center'>{alertMessage}</p>

                <button className={`w-4/5 text-white rounded-full p-3  hover:scale-90 transition-all duration-1000 ${alertType}`} 
                onClick={() => setShowAlert(false)}
                >Close</button>
            </div>
        </div>
    )
}