import { AppContext } from '../App'
import './Alert.css'
import { useContext } from 'react'


export const Alert = ({alertMessage, setShowAlert, alertType, }) =>{
    // type success, error
    const { mediumScreen } = useContext(AppContext)
    return(
        <div className="alertParent" style={{
            zIndex: 500
        }}>
            <div className={`rounded-2xl alert ${mediumScreen ? 'w-11/12' : 'w-3/5'} rounded-4`}>
                <div className={`${alertType} rounded-full flex items-center justify-center text-7xl text-white`} style={{
                    height: 100+'px',
                    width: 100+'px'
                }}>
                    <i className={`bi bi-${alertType == 'success' ? 'check-lg' : alertType == 'error' ?  'exclamation' : ''}`}></i>
                </div>

                <h3 className='font-bold text-xl'>{alertType == 'success' ? 'Sent' : 'Failed'}</h3>
                <p className='text-center'>{alertMessage}</p>

                <button className={`w-4/5 text-white rounded-full p-3 ${alertType}`} 
                onClick={() => setShowAlert(false)}
                >Close</button>
            </div>
        </div>
    )
}