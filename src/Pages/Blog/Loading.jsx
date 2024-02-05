import { useContext } from "react"
import { AppContext } from "../../App"
import './Blog.css'

export const Loading = () => {
    const { mediumScreen, smallScreen } = useContext(AppContext)
    return(
        <div className="m-9 p-9">
            <div className={`m-auto h-full ${smallScreen ? ' my-4' : 'w-11/12'} flex items-between overflow-hidden rounded-xl bg-gray-900 z-10 relative`} style={{
                    height: mediumScreen ? 100+'%' : 70+'vh',
                    width: smallScreen ? 90+'%' : 350+'px'
                }}>
                        <p className="absolute top-0 transition-all duration-200 blogLoad" style={{
                            height: 100+'%',
                            width: 100+'%',
                        }}></p>
                        
                    {/* <div className="lines absolute">
                    </div> */}
                                    
                    <div className="flex flex-col justify-between h-full w-full bg-blue-10">
                        <div className={`flex ${mediumScreen ? 'items-center' : ''} h-4/5 w-full bg-gray-800 rounded-t-xl`} style={{
                            height: mediumScreen ? 100+'%' : 30+'vh',
                        }}>
                            
                        </div>

                        <div className="flex flex-col px-3 py-2 rounded-b-xl w-full h-full" style={{
                            height: mediumScreen ? 100+'%' : 40+'vh'
                        }}>
                            <div className="flex justify-between items-center w-full h-1/5">
                                <h3 className="small w-full h-1/5 bg-gray-700"></h3>    
                            
                            </div>
                            <div className={`flex flex-col h-full justify-between mb-4 mt-2 gap-3 `} >
                                <h3 className="w-full h-1/5 bg-gray-700"></h3>
                                <h3 className="w-full h-2/5 bg-gray-700"></h3>
                                <div className="w-full">
                                    <div className="z-10 rounded-lg underline button  py-3 w-4/12 bg-gray-700"></div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}