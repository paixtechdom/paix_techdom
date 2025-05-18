import { useContext, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios"
import { AppContext } from "../../../../App"
import { useNavigate } from "react-router"
import { EditQuestion } from "../../../Dashboard/EditQuestion"
import Cookie from "js-cookie"
import { ImportQuestions } from "../../../Dashboard/ImportQuestions"
import { useDispatch, useSelector } from "react-redux"
import { availableDepartments, DangerButtonCLass, dbLocation, PrimaryButtonCLass, SecondaryButtonCLass, SuccessButtonClass, TopLevelHeader } from "../../../../assets/Constants"
import AddQuestionForm from "./AddQuestionForm"
import { SetTimeComponent } from "./SetTimeComponent"
import { setExamDepartment, setExamFaculty, setExamKey, setExamLevel, setExamStatus, setExamTitle } from "../../../../assets/store/ExamSlice"
import { useMyAlert } from "../../../../assets/Hooks/useMyAlert"
import { useUpdateExamDetails } from "../../../../assets/Hooks/useUpdateExamDetails"
import InfoComponent from "../../../../Components/InfoComponent"




export const CreateExam = () =>{
    
    const { savedQuestions, login, fetchQuestions } = useContext(AppContext)

    const titleRef = useRef()
    const dispatch = useDispatch()
    const triggerAlert = useMyAlert()
    const updateExamDetails = useUpdateExamDetails()
    const examstate = useSelector((state) => state.examslice)  

    const examKey = examstate.examKey
    const examTitle = examstate.examTitle
    const duration = examstate.duration
    const status = examstate.status      
    const level = examstate.level      
    const faculty = examstate.faculty      
    const department = examstate.department      


    const [ editPart, setEditPart ] = useState("")
    const [ newExamInfo, setNewExamInfo ] = useState({
        examTitle: "",
        level: "",
        faculty: "",
        department: ''
    })



    const navigate = useNavigate()
    
    const FetchExam = async (key) => {
        await axios.get(`${dbLocation}/exams.php/${key}/fetch`)
        .then((res) => {
            const exam = res.data[0]
            
            if(exam == undefined){
                navigate("/exams/all-exams") 
                triggerAlert("error", "Error Fetching Exam")
                return
            }
            
            if((window.document.URL).split("/")[4].toLowerCase() !== exam.examTitle.toLowerCase().replaceAll(" ", "-")){
                triggerAlert("error", "Error Fetching Exam")
                navigate("/page-not-found")
                return
            }

            updateExamDetails(exam)

        })
        .catch(() => {
            triggerAlert("error", "Error Fetching Exam")
            navigate("/exams/all-exams")            
        })
    }

    const cookiedExamKey = Cookie.get('examKey')

    useEffect(() =>{
        dispatch(setExamKey(cookiedExamKey))
        fetchQuestions(cookiedExamKey)
        FetchExam(cookiedExamKey || examKey)

        if(examKey == "" && cookiedExamKey == ""){
            navigate("/exams/all-exams")
        }
    }, [])



// to ensure the new exam info is updated after refreshing the page
    useEffect(() => {
        setNewExamInfo({
            examTitle : examTitle,
            level: level,
            faculty : faculty,
            department : department
        })
    
    }, [examstate])
  
    
    const updateExamStatus = async (examKey, status) =>{
        // let appearance = 0
        // let i = 0
        if(savedQuestions.length < 5 ){
            triggerAlert("error", "You need at least 5 questions to go live")
        }else{
            if(status == 'Active'){
                await axios.post(`${dbLocation}/exams.php/${examKey}/Inactive`).then(() => {
                    triggerAlert("info", "Exam is now inactive")
                    dispatch(setExamStatus( status == 'Active'? 'Inactive' : 'Active'))
                })
                
            }else{
                await axios.post(`${dbLocation}/exams.php/${examKey}/Active`).then(() => {
                    triggerAlert("success", "Exam is now live")
                    dispatch(setExamStatus( status == 'Active'? 'Inactive' : 'Active'))
                })
            }

            // savedQuestions.forEach((question, index) =>{
    
            //     if(question.answer == 'Answer not selected'){
            //         appearance = 1
            //         i = index + 1
            //     }
            //     })
                
            //     if(appearance > 0){
            //         alert('Answer Not Selected in no ' + i )
                    
            //     }
            //     else{
                    
                    // if(status == "Active"){}
            //     }
        }
    }

    useEffect(() => {
        if(faculty !== newExamInfo.faculty){
            setNewExamInfo({
                ...newExamInfo,
                department: ""
            })
        }

        if(faculty !== newExamInfo.faculty || level !== newExamInfo.level || department !== newExamInfo.department){
            updateExamInfo()
        }
        else{
        }
    }, [newExamInfo])

    const updateExamInfo = async () => {
        console.table(newExamInfo)
        if(newExamInfo.department == ""){
            triggerAlert("error", "Select a new department")
            return
        }
        // await axios.post(`${dbLocation}/exams.php/update/${examKey}`, newExamInfo)
        // .then((res) => {
        //     if(res.data.status == 1) {
        //         dispatch(setExamTitle(newExamInfo.examTitle))
        //         dispatch(setExamLevel(newExamInfo.level))
        //         dispatch(setExamDepartment(newExamInfo.department))
        //         dispatch(setExamFaculty(newExamInfo.faculty))
        //         triggerAlert("success", "Exam Info Updated Successfully")
        //         navigate(`/exam/${newExamInfo.examTitle.replaceAll(" ", "-")}`)
        //     }else{
        //         triggerAlert("error", "Failed to Update Exam Info")
        //     }
        // })
        // .catch(() => {
        //     triggerAlert("error", "Failed to Update Exam Info")
        // })
    }


    return (
        <main className="center flex-col w-full mt-[15vh]">
            <section className="flex flex-col gap-4 w-11/12 lg:gap-8">
            
                <div className="flex flex-col w-full justify-between gap-4 ">
                    {/* Exam Titls */}
                    <div className="flex flex-wrap gap-5 justify-between lg:items-center">
                        <input 
                            className={TopLevelHeader + " w-full lg:w-10/12 outline-gray-300 px- 2 p-3 rounded-xl"} 
                            ref={titleRef}
                            value={newExamInfo.examTitle} 
                            readOnly={editPart !== "examTitle"}
                            onClick={() => {
                                setEditPart("examTitle")
                            }}
                            onChange={(e) => {
                                setNewExamInfo({
                                    ...newExamInfo,
                                    examTitle: e.target.value
                                })
                            }}
                        />
                        {
                            editPart == "examTitle" && newExamInfo.examTitle !== examTitle ?
                            
                            <button className={PrimaryButtonCLass + " h-fit"} onClick={() => {
                                setEditPart("")
                                updateExamInfo()
                            }}>Save</button>
                             :

                            <button className={SecondaryButtonCLass + " h-fit"} onClick={() => {
                                titleRef.current.focus()
                                setEditPart("examTitle")
                            }}>Edit</button> 
                        }
                    </div>
                    
                    {/* Exam Info */}
                    
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                        <InfoComponent 
                            title={"Faculty:"}
                            info={newExamInfo.faculty}
                            icon={
                                editPart == "faculty" ?
                                
                                <i className="bi bi-x text-2xl hover:scale-110" onClick={() =>{
                                setEditPart("f")
                                }}>

                            </i>: 
                            <i className="bi bi-chevron-down text-lg hover:scale-110" onClick={() =>{
                                setEditPart("faculty")
                                }}>

                            </i>    
                        }
                            >
                            {
                                editPart == "faculty" && 
                                <EditPartDropDownComponent 
                                    data={
                                        availableDepartments.map(d => d.faculty)
                                    }   
                                    part="faculty"
                                    setNewExamInfo={setNewExamInfo} setEditPart={setEditPart}
                                    newExamInfo={newExamInfo}
                                />
                            }   
                        </InfoComponent>

                        <InfoComponent 
                            title={"Level:"}
                            info={newExamInfo.level}
                            icon={
                                editPart == "level" ?
                                
                                <i className="bi bi-x text-2xl hover:scale-110" onClick={() =>{
                                setEditPart("f")
                                }}>

                            </i>: 
                            <i className="bi bi-chevron-down text-lg hover:scale-110" onClick={() =>{
                                setEditPart("level")
                                }}>

                            </i>    
                        }
                            >
                            {
                                editPart == "level" && 
                                <EditPartDropDownComponent 
                                    data={["100", "200", "300", "All"]}
                                    part="level"
                                    setNewExamInfo={setNewExamInfo} 
                                    setEditPart={setEditPart}
                                    newExamInfo={newExamInfo}
                                />
                            }   
                        </InfoComponent>

                        <InfoComponent 
                            title={"Department:"}
                            info={newExamInfo.department}
                            icon={
                                editPart == "department" ?
                                <i className="bi bi-x text-2xl hover:scale-110" onClick={() =>{
                                setEditPart("f")
                                }}>

                            </i>: 
                            <i className="bi bi-chevron-down text-lg hover:scale-110" onClick={() =>{
                                setEditPart("department")
                                }}>

                            </i>    
                        }
                            >
                            {
                                editPart == "department" && 
                                <EditPartDropDownComponent 
                                // get departments based on the selected faculty
                                    data={availableDepartments.filter((d, i) => 
                                        d.faculty == newExamInfo.faculty ?
                                        availableDepartments[i] :""
                                        )[0].department}
                                        
                                    part="department"
                                    setNewExamInfo={setNewExamInfo} setEditPart={setEditPart}
                                    newExamInfo={newExamInfo}
                                />
                            }   
                        </InfoComponent>
                    </div>  

                </div>
                {/* Duration, inport questions, set live or active  */}

                <div className="flex items-center gap-5 justify-center w-full">
                    <SetTimeComponent 
                        examKey={examKey}
                        duration={duration}
                    />
                    
                    <ImportQuestions fetchQuestions={fetchQuestions} examKey ={examKey} setExamStatus={setExamStatus} status={status}/>
                    {/* <p>Duration: </p> */}
                    
                    
                    <button className={`${status == "Active" ? SuccessButtonClass : SecondaryButtonCLass } font-bold text-sm button w-fit `}
                    onClick={() => updateExamStatus(examKey, status)}>{status == "Active" ? "Live" : "Go Live"}</button>

                </div>

                
            </section>
            

            {/* A list of all questions in an editable format*/}
            {
                savedQuestions.map((question, i) => (
                    <EditQuestion 
                        editQuestionInfo={question} 
                        key={i}
                        questionNo={i+1}
                        noOfQuestions={savedQuestions.length}
                    />
                ))
            }

            {/* Component to add a new question */}
            <AddQuestionForm examKey={examKey} fetchQuestions={fetchQuestions} 
            no={savedQuestions.length + 1}/>

            {
                savedQuestions.length < 1 ? <p style={{
                    paddingLeft: 5+'%'
                }}>No saved Question</p> :
                ''
            }

        </main>

    )


    // if(examKey.length < 2){
    //     return(
    //         <button   onClick={() =>{
    //                 navigate('/admin')
                    
    //             }}
    //         className="createExamBack">
    //             Back
    //         </button>
    //     )
    // }

    
}


const EditPartDropDownComponent = ({data, part, setNewExamInfo, setEditPart, newExamInfo}) => {
  return(
    <div className="absolute top-[100%] mt-2 left-0 w-full flex flex-col bg-gray-100 shadow-xl rounded-xl overflow-hidden z-20">
        {
            data.map((d, key)  => (
                <p key={key}
                 className={`hover:bg-white p-3 px-5 transition-all duration-500 ease-in-out text-sm
                ${newExamInfo[part] == d ? "bg-white" : ""}
                `}
                onClick={() => {
                    setEditPart("q")
                    setNewExamInfo({
                        ...newExamInfo,
                        [part]: d
                    })
                }}
                >
                    {d}
                </p>
            ))
        }
    </div>
  )   
}