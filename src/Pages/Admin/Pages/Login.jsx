import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AppContext } from "../../../App"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Cookie from "js-cookie"
import { ErrorMessageTextClass, PrimaryButtonCLass, TextInputClass, TopLevelHeader } from "../../../assets/Constants"


export const Login = () =>{
    const { setUserName, setLogin, setUserId, setFirstName } = useContext(AppContext)
    const Navigate = useNavigate()

    // to store users fetched
    const [ adminDetails, setAdminDetails ] = useState([])
 
    // to store error to be displayed if there is error in the login details
    const [ customError, setCustomError ] = useState('')
    const [ showPassword, setShowPassword ] = useState('password')
    // const Navigate = useNavigate()
      
    useEffect(() =>{
        getAdminDetails()
        setLogin(false)
        Navigate('/Login')
        Cookie.remove('userDetails', {path:'/'})
    }, [])

    
    // to fetch all users
    const getAdminDetails =  () =>{
        axios.get('http://localhost:80/api-quiz-app/admin/').then(function(response){
            setAdminDetails(response.data)
        }) 
    }
    // 192.168.43.44

    // to validate the login inputs
    const schema = yup.object().shape({
        userName: yup.string().required('Username is required'),
        Password: yup.string().min(6).max(18).required()
    })
    
    // to handle the details of the form on submit
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    // LOGIN FUNCTION
    const onLogin = (data) =>{
        // to fetch all users and check if the username and password matches an existing record
        if(data.userName == adminDetails[0].userName && data.Password == adminDetails[0].password){
            // to create and save a cookie of this user's details
            Cookie.remove('userDetails', {path:'/'})
            Cookie.set('userDetails', JSON.stringify(adminDetails[0]), {
                expires: 1,
                sameSite:'strict',
                secure: 'true'
            })
            const user = JSON.parse(Cookie.get('userDetails'))
            setUserName(user?.userName)
            setFirstName(user?.userName)
            setLogin(true)
            setUserId(user.id)
            Navigate('/dashboard')
        }
        else{
            // setCustomError('Incorrect Username or password')
            // setTimeout(() => {
            //     setCustomError('')
            // }, 3000);
        }
}



    return (
        <main className="w-full center min-h-screen">
            <div className="w-11/12 center">

                <div className="w-full lg:w-6/12 center flex-col gap-10 bg-gray-100 min-h-[60vh] py-[7vh] px-4 rounded-2xl shadow-xl">
                
                <h1 className={`${TopLevelHeader} w-11/12`}>Admin Login</h1>

                <form className="flex flex-col w-11/12 gap-3">
                <div className="flex flex-col gap-4">
                            <label className="text-gray-500 font-bold" htmlFor="matricNumber">User Name</label>

                            <input className={TextInputClass} type="text" placeholder="Username"  {...register('userName')} />
                            <p className={ErrorMessageTextClass}>{errors.userName?.message}</p>
                            </div>

                        <div className="flex flex-col gap-4">
                            <label className="text-gray-500 font-bold" htmlFor="password">Password</label>

                            <div className={`${TextInputClass} flex items-center justify-between w-full`}>
                                <input type={showPassword} 
                                className={"outline-none w-full"}
                                placeholder="**********"  
                                {...register('Password')}/>
                                
                                <i className="bi bi-eye-fill text-xl text-gray-700" 
                                    onClick={() =>{
                                        setShowPassword(showPassword == 'text' ? 'password' : 'text') 
                                    }}
                                ></i>
                                {/* <input type="checkbox" name="" id="" 
                                /> */}
                            </div>
                            <p className={ErrorMessageTextClass}>{errors.Password?.message}</p>
                        </div>


                                        
                    <p className={ErrorMessageTextClass}>{customError}</p>

                   

                    <button onClick={handleSubmit(onLogin)} className={`${PrimaryButtonCLass} uppercase font-bold w-fit min-w-[200px]`}> 
                        Login 
                    </button>
                </form>
                <div className="fixed top-0 right-0 w-[300px]">
                    <img src="./images.jpeg" alt="Pics" />
                </div>
                </div>

                <button className="fixed top-5 left-5 border border-gray-400 h-[45px] w-[45px] bg-white center rounded-full transition" onClick={() =>{
                    Navigate('/')
                }}
                >
                    <i className="bi bi-arrow-left text-2xl"></i>
                </button>
        </div>
        </main>
    )
}