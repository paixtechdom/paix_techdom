import { useContext, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios"
import { AppContext } from "../../../../App"
import { useNavigate } from "react-router"
import { EditQuestion } from "./EditQuestion"
import Cookie from "js-cookie"
import { ImportQuestions } from "./ImportQuestions"
import { useDispatch, useSelector } from "react-redux"
import { availableDepartments, DangerButtonCLass, dbLocation, PrimaryButtonCLass, SecondaryButtonCLass, SuccessButtonClass, TopLevelHeader } from "../../../../assets/Constants"
import AddQuestionForm from "./AddQuestionForm"
import { SetTimeComponent } from "./SetTimeComponent"
import { setExamDepartment, setExamFaculty, setExamKey, setExamLevel, setExamStatus, setExamTitle, setTotalScore } from "../../../../assets/store/ExamSlice"
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
    const totalScore = examstate.totalScore      
    const department = examstate.department      


    const [ editPart, setEditPart ] = useState("")
    const [ newExamInfo, setNewExamInfo ] = useState({
        examTitle: examTitle,
        level: level,
        faculty: faculty,
        department: department
    })



    const navigate = useNavigate()
    
    const FetchExam = async (key) => {
        await axios.get(`${dbLocation}/exams.php/${key}/fetch`)
        .then((res) => {
            const exam = res.data[0]
            
            if(exam == undefined){
                navigate("/exams/all-exams") 
                // triggerAlert("error", "Error Fetching Exam undefined")
                console.log("Error Fetching Exam undefined")
                return
            }
            
            if((window.document.URL).split("/")[4].toLowerCase() !== exam.examTitle.toLowerCase().replaceAll(" ", "-")){
                // triggerAlert("error", "Error Fetching Exam false url")
                console.log("Error Fetching Exam false url")
                // navigate("/page-not-found")
                return
            }

            updateExamDetails(exam)

        })
        .catch(() => {
            // triggerAlert("error", "Error Fetching Exam no exam")
            console.log("Error Fetching Exam no exam")
            navigate("/exams/all-exams")            
        })
    }
    
    
    const CookiedExamDetails = Cookie.get("examDetails") 
    const CookiedUserDetails = Cookie.get("userDetails") 
    
    useEffect(() =>{
        document.documentElement.scrollTop=0

        if(CookiedUserDetails == "admin"){
            if(CookiedExamDetails !== undefined){
                const examDetails = JSON.parse(Cookie.get("examDetails"))
                dispatch(setExamKey(examDetails.examKey))
                fetchQuestions(examDetails.examKey)
                FetchExam(examDetails.examKey)
                updateExamDetails(examDetails)
            }
            else{
                navigate("/exams/all-exams")            
            }
        }else{
            navigate("/")
        }
    }, [])



// to ensure the new exam info is updated with the info in the store after refreshing the page
    useEffect(() => {
        // if(editPart !== "" || editPart !== "empty"){
            if (CookiedExamDetails !== undefined){
            setNewExamInfo({
                examTitle : examTitle,
                level: level,
                faculty : faculty,
                department : department
            })
        }
        // }
    
    }, [examstate])
  
    
    const updateExamStatus = async (examKey, status) =>{
        // let appearance = 0
        // let i = 0
        if(savedQuestions.length < 5 ){
            triggerAlert("error", "You need at least 5 questions to go live")
        }else{
            if(duration < 60){
                triggerAlert("error", "Time frame is too short for an exam")
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
    }

    // change points, add new question or delete question

    const UpdateTotalScore = async (points, index) => {
        let totalScore = 0
        savedQuestions.forEach((q) => {
            totalScore += q.points
        })
        if(points){
            totalScore -= savedQuestions[index].points
            totalScore += points
        }else{
        }
        
        await axios.post(`${dbLocation}/exams.php/${totalScore}/totalScore/${examKey}`)
        .catch(() =>{
            triggerAlert("error", "Failed to update Info")
        })
        dispatch(setTotalScore(totalScore))
    }

    // saved question.lenth is to track if a new question has been added
    useEffect(() => {
        UpdateTotalScore()
    }, [savedQuestions.length])

    useEffect(() => {
        // to prevent calling running this code before the app state updates hereby deleting all info 
        // editPart = "" when the state is refreshed and  = "epmty" when an edit has ended from the title, dept, level and faculty
        if(editPart !== "" || editPart !== "empty"){
            if(faculty !== newExamInfo.faculty){
                setNewExamInfo({
                    ...newExamInfo,
                    department: ""
                })
            }


            // // faculty, level, department
            // if(faculty !== newExamInfo.faculty || level !== newExamInfo.level || department !== newExamInfo.department){
            //     updateExamInfo()
            //     // console.log("updateExamInfo")
            // }
            // else{
            // }
        }
    }, [newExamInfo.faculty])


    const updateExamInfo = async () => {
        // console.table(newExamInfo)
        if(newExamInfo.department == ""){
            triggerAlert("info", "Select a department")
        }
        await axios.post(`${dbLocation}/exams.php/update/${examKey}`, newExamInfo)
        .then((res) => {
            if(res.data.status == 1) {
                dispatch(setExamTitle(newExamInfo.examTitle))
                dispatch(setExamLevel(newExamInfo.level))
                dispatch(setExamDepartment(newExamInfo.department))
                dispatch(setExamFaculty(newExamInfo.faculty))
                dispatch(setTotalScore(newExamInfo.totalScore))
                {
                    newExamInfo.department !== "" &&
                    triggerAlert("success", "Exam Info Updated Successfully")

                }
                // navigate(`/exam/${newExamInfo.examTitle.replaceAll(" ", "-")}`)
            }else{
                triggerAlert("error", "Failed to Update Exam Info")
            }
        })
        .catch(() => {
            triggerAlert("error", "Failed to Update Exam Info")
        })
    }


    return (
        <main className="center flex-col w-full my-[15vh]">
            <section className="flex flex-col gap-4 w-11/12 lg:gap-8">
                {/* {examTitle} : {faculty} : {level} : {department}  */}
                <div className="flex flex-col w-fullw justify-between gap-4 ">

                    {/* Exam Title */}
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
                                setEditPart("empty")
                                }}>

                            </i>: 
                            <i className="bi bi-chevron-down text-lg hover:scale-110" onClick={() =>{
                                setEditPart("faculty")
                                }}>

                            </i>    
                        }>
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
                                setEditPart("empty")
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
                                    data={["100", "200", "300"]}
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
                                setEditPart("empty")
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
                                        availableDepartments[i] :[]
                                        )[1].departments}
                                        
                                    part="department"
                                    setNewExamInfo={setNewExamInfo} setEditPart={setEditPart}
                                    newExamInfo={newExamInfo}
                                />
                            }   
                        </InfoComponent>
                        <div className="w-full flex gap-3">

                            <InfoComponent
                                title={"Questions:"}
                                info={savedQuestions.length}
                            />
                            <InfoComponent
                                title={"Total Score:"}
                                info={totalScore}
                            />
                        </div>
                    </div>  

                </div>
                {/* Duration, inport questions, set live or active  */}

                <div className="flex flex-wrap items-center gap-5 justify-center w-full">
                    <ImportQuestions fetchQuestions={fetchQuestions} examKey ={examKey} setExamStatus={setExamStatus} status={status}/>
                    {/* <p>Duration: </p> */}
                    
                    <div className="flex gap-5 items-center">

                        <button className={`${status == "Active" ? SuccessButtonClass : SecondaryButtonCLass } font-bold text-sm button w-fit `}
                        onClick={() => updateExamStatus(examKey, status)}>{status == "Active" ? "Live" : "Go Live"}</button>

                        <SetTimeComponent 
                            examKey={examKey}
                            duration={duration}
                        />
                    </div>
                    
                    

                </div>

                
            </section>
            

            {/* A list of all questions in an editable format*/}
            {/* {   
                savedQuestions.length > 0 &&
                <> */}
               { savedQuestions?.map((question, i) => (
                    <EditQuestion 
                        editQuestionInfo={question} 
                        UpdateTotalScore={UpdateTotalScore} 
                        key={i}
                        questionNo={i+1}
                        noOfQuestions={savedQuestions.length}
                        />
                ))}
                {/* </> */}
            {/* } */}

            {/* Component to add a new question */}
            <AddQuestionForm examKey={examKey} fetchQuestions={fetchQuestions} 
            no={savedQuestions?.length + 1}/>

            {
                savedQuestions?.length < 1 ? <p style={{
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
    const newData = [...data, "All"]
    

  return(
    <div className="absolute top-[100%] mt-2 left-0 w-full flex flex-col bg-gray-100 shadow-xl rounded-xl overflow-hidden z-20">
        {
            newData.map((d, key)  => (
                <p key={key}
                 className={`hover:bg-white p-3 px-5 transition-all duration-500 ease-in-out text-sm
                ${newExamInfo[part] == d ? "bg-white" : ""}
                `}
                onClick={() => {
                    setEditPart("empty")
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