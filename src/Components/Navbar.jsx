import Cookie from "js-cookie"
import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"
import { ChangePassword } from "../Pages/ChangePassword"
import { ConfirmBox } from "./ConfirmBox/ConfirmBox"
import { Logo, SideNav } from "../assets/Constants"
import { Link, useNavigate } from "react-router-dom"

export const Navbar = () =>{
    const { startedExam, userName, setExamKey, login, setConfirm, logout, setConfirmMessage, setConfirmFunction, firstName, hideNavBar } = useContext(AppContext)
    const [ showChangePassword, setShowChangePassword]= useState(false)
    const navigate = useNavigate()

    const [ hideSideNav, setHideSideNav ] = useState(true)
    const [ currentNav, setCurrentNav ] = useState(0)
    const [ currentDropDown, setCurrentDropDown ] = useState(0)
    
    // if(login && userName ){
    //     if(!hideNavBar){
    //         return(
    //             <div className="navbar">
    //                 {
    //                     !startedExam &&
    //                 <h3> {!firstName == 'Admin' ? '' : firstName?.toUpperCase()} </h3> 
    //                 }
    //                 {/* <div> */}
    //                     {
    //                         !startedExam &&
    //                             <button className="logout"
    //                             onClick={() =>{
    //                                 setShowChangePassword(true)
    //                             }}
    //                             >
    //                                 Password
    //                             </button>
    
    //                     }
    //                     {
    //                         !startedExam &&
    //                         <button className="logout" onClick={() =>{                 
    //                             setConfirm(true)
    //                             setConfirmFunction('Logout')
    //                             setConfirmMessage('Do you want to Logout?')
    //                         }}>Logout</button>
    //                     }
    //                 {
    //                     startedExam &&
    //                 <h3> {firstName?.toUpperCase()} </h3> 
    //                 }
    //                 {/* </div> */}
    //                 {
    //                     showChangePassword == true &&
    //                     <ChangePassword setShowChangePassword={setShowChangePassword}/>
    //                 }
    
    //             </div>
    
    //         )

    //     }
    // }

    return(
        <>
        {/* *******************  SIDE BAR NAVIGATION    ******************* */}

            <div className={`fixed top-0 z-40 h-screen w-full flex justify-start items-start  transition-all duration-1000 ${hideSideNav ? '-translate-x-[100%]' : ''}`}>
                <nav className="flex flex-col bg-gray-100 items-center w-[100%] lg:w-[40%] xl:w-[25%] h-screen pt-[10vh]">
                    {
                        SideNav.map((nav, i) => (
                            <div key={i} className="flex flex-col transition-all duration-1000 justify-between w-full text-s  text-gray-900 border-b border-gray-200 ">
                                <div className={`flex w-full p-5 justify-between cursor-pointer ${currentNav === i ? 'bg-primary text-white hover:bg-blue-900' : 'text-secondary hover:bg-gray-200'}`} onClick={() => {
                                    if( nav.sublinks){
                                        setCurrentDropDown(currentDropDown === nav.title ? '' : nav.title) 

                                    }else{

                                        navigate(`/${nav.link}`)
                                        setCurrentNav(i)
                                        setHideSideNav(true)
                                    }
                                   
                                }}>
                                    <div className="flex gap-5 ">
                                        <i className={`bi bi-${nav.icon} `}></i>
                                        <p>{nav.title}</p>
                                    </div>

                                    {
                                        nav.sublinks ?
                                        <i className={`bi bi-chevron-${currentDropDown === nav.title ? 'up' : 'down'} cursor-pointer hover:bg-gray-400 h-6 w-6 center rounded-full`} ></i> : ''
                                    }

                                </div>
                                {/**** NAVS WITH SUBLINKS */}
                                {
                                    nav.sublinks ?
                                    <div className={`flex flex-col gap-3 w-full overflow-hidden transition-all duration-100 ${currentDropDown == nav.title ? 'flex mb-7' : 'h-0 text-[0px] mb-0'} `}>

                                        {   
                                            nav?.sublinks?.map((sublink, j) => (
                                                <Link to={`/${nav.link}/${sublink.link}`} key={j} className="flex gap-5 py-3 hover:bg-gray-300 w-full px-8 text-sm" onClick={() => {setHideSideNav(true)
                                                    setCurrentNav(i)
                                                }}>
                                                <i className={`bi bi-${sublink.icon} text-secondary`}></i>
                                                <p className="">{sublink.title}</p>
                                            </Link>
                                            ))
                                        }
                                    </div>  : ''
                                }
                            </div>
                        ))
                    }
                </nav>

                <div className="h-full bg-transparent w-[60%] lg:w-[60%] xl:w-[70%]" onClick={ ()=> setHideSideNav(!hideSideNav)}>
                
                </div>

            </div>

        
        {/********************  TOP NAVIGATION    ********************/}
        
        <div className="fixed h-[8vh] md:h-[10vh] shadow bg-gray-900 top-0 w-full flex items-center justify-between" style={{
            zIndex: 45
        }}>
            {/* LEFT TOP NAV */}
            <div className="w-11/12 lg:w-7/12 flex items-center gap-6 px-5">
                <i className={` bi bi-${hideSideNav ? 'list' : 'x-lg'} bg-gray-100 text-2xl cursor-pointer text-gray-900 center h-8 w-12 rounded center`} onClick={ ()=> setHideSideNav(!hideSideNav)}></i>

                <p className="text-sm font-bold text-gray-100 flex gap-2 items-center w-full">
                    
                    <img src={Logo} alt="Kenrow Logo" className="w-1/12 bg-gray-100 rounded hidden"/>
                    </p>
            </div>

          

            {/* LEFT NAV */}
            <div className="flex justify-end items-center px-5 text-gray-100 w-7/12 bg-yellow-30 0 gap-4 md:gap-6">
               
                <div className="flex relative cursor-pointer">
                    <i className="bi bi-bell-fill md:text-2xl"></i>
                    <small className="absolute text-gray-900 font-bold bg-red-300 rounded h-3 w-3 md:h-4 md:w-4 text-[10px] md:text-small center right-0">5</small>
                </div>

                <i className="bi bi-search md:bg-primary text-white center h-full block cursor-pointer md:text-2xl"></i>

                <div className="flex relative cursor-pointer">
                    <i className="bi bi-person-fill border bg-gray-100 text-secondary rounded-full h-8 w-8 md:h-10 md:w-10 center text-xl md:text-2xl"></i>
                </div>

            </div>

        </div>
        
        </>
    )
}