import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
// import './Login.css'
import Cookie from "js-cookie"
import { AppContext } from "../../App"
import { ErrorMessageTextClass, PrimaryButtonCLass, TextInputClass, TopLevelHeader } from "../../assets/Constants"


export const StudentLogin = () => {

    const {  setStudentMatricNumber, setUserName, setStudentLevel,  setStudentDepartment,  setStudentFaculty, dbLocation, setLogin, setUserId  } = useContext(AppContext)
    const [ customError, setCustomError ] = useState('')
    const [ showPassword, setShowPassword ] = useState('password')


    const Navigate = useNavigate()

    useEffect(() => {
        setLogin(false)
        Navigate('/Student_login')
        Cookie.remove('userDetails', {path:'/'})
    }, [])
    
    
    // to validate the login inputs
    const schema = yup.object().shape({
        matricNumber: yup.string().required('Matric Number is required'),
        Password: yup.string().min(6).max(18).required()
    })
    useEffect(() =>{
        setCustomError('')
    }, [schema.Password, schema.matricNumber])
    
    // to handle the details of the form on submit
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onLogin = async (data) => {
        await axios.get(`${dbLocation}/studentRegistration.php/students`).then(function(response) {
            let students = response.data

            students.forEach((student) => {
                if(student.matricNumber == data.matricNumber && student.password == data.Password){
                    Cookie.remove('userDetails', {path:'/'})
                    Cookie.set('userDetails', JSON.stringify(student), {
                        expires: 1,
                        sameSite:'strict',
                        secure: 'true'
                    })
                    const user = JSON.parse(Cookie.get('userDetails'))
                    setLogin(true)
                    setUserName(user.firstName + ' '+ user.lastName )
                    setStudentMatricNumber(user.matricNumber)
                    setStudentFaculty(user.faculty)
                    setStudentDepartment(user.department)
                    setStudentLevel(user.level)
                    setUserId(user.id)
                    Navigate(`/Student/${user.firstName} ${user.lastName}`)
                }
                else if(student.matricNumber == data.matricNumber && student.password != data.Password){
                    setCustomError("Incorrect Password")
                }
                else if(student.matricNumber != data.matricNumber && student.password == data.Password){
                    setCustomError("Incorrect Matric Number")
                }
               
            })
            // console.log(students)
        })

    }


    return (
        <main className="w-full center min-h-screen">
            <div className="w-11/12 center">

                <div className="w-full lg:w-6/12 center flex-col gap-10 bg-gray-100 min-h-[60vh] py-[7vh] px-4 rounded-2xl shadow-xl">
                    <h1 className={`${TopLevelHeader} w-11/12`}>Student Login</h1>

                    <form className="flex flex-col w-11/12 gap-3">
                        <div className="flex flex-col gap-4">
                            <label className="text-gray-500 font-bold" htmlFor="matricNumber">Matric Number</label>

                            <input className={TextInputClass} type="text" placeholder="Input your Matric Number"  {...register('matricNumber')} />
                            <p className={ErrorMessageTextClass}>{errors.matricNumber?.message}</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <label className="text-gray-500 font-bold" htmlFor="password">Password</label>

                            <div className={`${TextInputClass} flex items-center justify-between w-full`}>
                                <input type={showPassword} 
                                className={"outline-none w-full"}
                                placeholder="Password"  
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
                        <img src="./istockphoto-1384437843-612x612.jpg" alt="Piss" />
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