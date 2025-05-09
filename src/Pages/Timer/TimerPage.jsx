import React, { useEffect, useState } from 'react'

// to format time input in seconds to hr:min:sec format
const FormatTime = (time) =>{
    let hours = Math.floor(time/3600) % 24
    let minutes = (Math.floor(time/60) % 60)
    let seconds = Math.floor(time % 60)
    if(minutes < 10) minutes = '0' + minutes
    if(seconds < 10) seconds = '0' + seconds
    return hours + ':' + minutes + ':' + seconds
}

const TimerPage = () => {
    
    const [ timeout, setTimeout ] = useState(0)
    // total seconds inputed and to be formatted
    const [ timeFrame, setTimeFrame ] = useState(0)
    // 
    const [ seconds, setSeconds ] = useState(0)
    const [ closeSessionInput, setCloseSessionInput ] = useState(0)


    
    useEffect(() => {
        if (seconds > 0) {
            const countDownInterval = setInterval(() => {
            setSeconds(prev => prev == 0 ? 0 : prev -= 1)
        }, 1000);
            
            return () => clearInterval(countDownInterval)
        }
        if(seconds == 0 && timeFrame > 0){
            setTimeout(true)
        }else{
            setTimeout(false)
        }
    }, [seconds])

    const ResetButton = () =>{
        return(
        <button className='mt-6 bg-blue-950 bg-opacity-80 w-[100px] rounded-lg h-8 text-[12px] shadow-md shadow-gray-950 active:scale-90'   
            onClick={() => {
                setCloseSessionInput(false)
                setTimeout(false)
                setTimeFrame(0)
                setSeconds(0)
            }}>
                Reset
        </button>
        )
    }

  return (
    <main className={`${timeout && seconds == 0 ? "bg-red-700" : "bg-transparent"} h-screen w-full center flex-col gap-32 text-white relative`}>

        <div className='flex items-center gap-2 absolute top-4 left-4'>
            <p className='text-[12px] text-blue-700'>Total:</p>
            <p>
                {FormatTime(timeFrame)}
            </p>
        </div>

        
        {  !closeSessionInput &&
            <SetNewSession 
                setTimeFrame={setTimeFrame} 
                timeFrame={timeFrame}
                setSeconds={setSeconds}
                seconds={seconds}
                setCloseSessionInput={setCloseSessionInput}
            />
        }
        
        {
            seconds == 0 && timeout?
            <div className="center flex-col">
                <div className='animate-bounce'>
                    <h3 className='text-7xl font-bold animate-pulse'>TIME UP!</h3>
                </div> 
                <ResetButton />
            </div>
            :
            seconds > 0 &&
            <div className="flex flex-col gap-3">

                <div className='center flex-col'>
                    <div className="flex flex-col">
                        <div className="flex justify-between text-blue-700 text-sm">
                            <p>Hr:</p>
                            <p>Min:</p>
                            <p>Sec</p>
                        </div>
                        <p className='text-7xl text-blue-300 font-bold '>
                            {FormatTime(seconds)}
                        </p>
                    </div>
                    <p>Time Remaining:</p>
                    <ResetButton />
                </div>

            </div>

            
        }        
    </main>
  )
}



const SetNewSession = ({setTimeFrame, setSeconds, timeFrame, seconds, setCloseSessionInput}) => {
    const [ sec, setSec ] = useState(0)
    const [ min, setMin ] = useState(0)
    const [ hr, setHr ] = useState(0)
    
    const Minutes_To_Seconds = (min) => {
        return min * 60 
    }
    const Hours_To_Seconds = (hr) => {
        return hr * 60 * 60
    }

    useEffect(() => {
        if(seconds === 0){
            setTimeFrame(Hours_To_Seconds(hr) + Minutes_To_Seconds(min) + sec)
        }
    }, [sec, min, hr])

    const startSession = () => {
        setSeconds(timeFrame) 
        setSec(0)
        setMin(0)
        setHr(0)
        setCloseSessionInput(true)
    }

    const StartCountDown = () => {
        timeFrame > 0 ?
        startSession()
        : alert("Enter a Valid Time Frame") 
    }
    // const OnEnterKey = (e) => {
    //     if(e.key == "Enter" ){

    //     }
    // }

    // useEffect(() => {
    //     document.addEventListener("keydown", OnEnterKey)

    //     return () => document.removeEventListener('keydown', OnEnterKey)
        
    // }, [seconds])



    return(
        <div className="center flex-col gap-3 bg-black p-5 rounded-xl border-blue-900 border shadow-md shadow-blue-900 min-w-[220px]">


            <div className="flex justify-between gap-4 w-full">
                
                <SetValuesComponent 
                    value={hr}
                    setValue={setHr}
                    title={"Hr"}
                    />

                <SetValuesComponent 
                    value={min}
                    setValue={setMin}
                    title={"Min"}
                    />
                
                <SetValuesComponent 
                    value={sec}
                    setValue={setSec}
                    title={"Sec"}
                />
                
            </div>

            <div className="flex w-full gap-3 center mt-3">

                <button className='border border-blue-900 w-full h-fit rounded-lg p-2 bg-gray-950 transition-all duration-100 active:scale-90 active:bg-black disabled:opacity-50 disabled:cursor-not-allowed'
                disabled={timeFrame === 0}
                onClick={() => StartCountDown()}>
                    Enter
                </button>

                <p className='bg-red-700 rounded-full h-8 w-8 center cursor-pointer active:scale-75 active:opacity-70 opacity-80' 
                onClick={() => {
                    setCloseSessionInput(true)
                }}
                ><i className="bi bi-x text-3xl"></i></p>
                
            </div>

        </div>

    )
}


const SetValuesComponent = ({value, setValue, title}) => {
    return(
        <div className="center flex-col gap-2">
            <p className={`text-[12px] font-bold text-blue-700`}>{title}</p>
            <ControlsButton 
            func={() => {
                setValue(prev => prev +=   1)
            }}>
                <i className='bi bi-chevron-up'></i>
            </ControlsButton>

            <input 
                type="number" 
                value={value} 
                className='w-12 text-center bg-transparent center'
                onChange={(e) => {
                setValue(value < 0 ? 0 : e.target.value) 
            }}
            />
            
            <ControlsButton 
                func={() => {
                setValue(prev => value <= 0 ? 0 : prev -= 1)
                }} 
                disabled={value == 0}
            >
                <i className='bi bi-chevron-down'></i>
            </ControlsButton>

        </div>
    )
}


const ControlsButton = ({children, func, disabled}) => {
    return(
        <button className='bg-black bg-opacity-30 border border-blue-900 rounded h-7 w-full center active:scale-90 transition-all duration-100 active:rotate-[15deg] shadow-sm shadow-blue-950 scale-90 disabled:opacity-40 disabled:cursor-not-allowed' 
        disabled={disabled}
        onClick={func}
        >
            {children}
        </button>
    )
}

export default TimerPage