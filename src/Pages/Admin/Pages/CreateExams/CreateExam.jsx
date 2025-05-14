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
import { DangerButtonCLass, dbLocation, SecondaryButtonCLass, SuccessButtonClass, TopLevelHeader } from "../../../../assets/Constants"
import AddQuestionForm from "./AddQuestionForm"
import { SetTimeComponent } from "./SetTimeComponent"
import { setDuration, setExamKey, setExamStatus, setExamTitle } from "../../../../assets/store/AppSlice"
import QuestionList from "./QuestionList"



export const CreateExam = () =>{
    
    const { savedQuestions, setSavedQuestions, login, questionTobeDeleted, setQuestionTobeDeleted, setConfirm, setConfirmFunction, setConfirmMessage, fetchQuestions } = useContext(AppContext)

    const [ showEditQuestion, setShowEditQuestion ] = useState(false)
    const dispatch = useDispatch()
    const appstate = useSelector((state) => state.appslice)  
    const examKey = appstate.examKey
    const examTitle = appstate.examTitle
    const duration = appstate.duration
    const examStatus = appstate.examStatus

    const [ editQuestionInfo, setEditQuestionInfo ] = useState({
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
        questionId: "",
        questionNo: ""
    }) 
        

    const navigate = useNavigate()
    let i = 0
    
    const FetchExam = async (key) => {
        await axios.get(`${dbLocation}/exams.php/${key}/fetch`)
        .then((res) => {
            const exam = res.data[0]
            dispatch(setExamKey(exam.examKey))
            dispatch(setExamStatus(exam.status))
            dispatch(setDuration(exam.duration))
            dispatch(setExamTitle(exam.examTitle))
        })
        .catch((error) => {
            console.log(error)
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
  

    
    const schema = yup.object().shape({
        question: yup.string().required('This field is required'),
        optionA: yup.string().required('This field is required'),
        optionB: yup.string().required('This field is required'),
        optionC: yup.string().required('This field is required'),
        optionD: yup.string().required('This field is required'),
    })
    
    const { register, handleSubmit, formState: {errors}, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    })
    
    
    
    const updateExam = (examKey, status) =>{
        let appearance = 0
        let i = 0
        if(savedQuestions.length < 1 ){
            alert('Questions cannot be empty')
        }else{
            savedQuestions.forEach((question, index) =>{
    
                if(question.answer == 'Answer not selected'){
                    appearance = 1
                    i = index + 1
                }
                })
                
                if(appearance > 0){
                    alert('Answer Not Selected in no ' + i )
                    
                }
                else{
                    
                    if(status == 'Active'){
                    axios.post(`${dbLocation}/exams.php/${examKey}/Inactive`)
                    }else{
                        axios.post(`${dbLocation}/exams.php/${examKey}/Active`)
                    }
                    setExamStatus( examStatus == 'Active'? 'Inactive' : 'Active')
                    
                }
        }
    }


      

    return (
        <main className="center flex-col w-full mt-[15vh]">
            

            <section className="flex flex-col gap-4 w-11/12">
                <div className="flex flex-col lg:flex-row w-full justify-between">
                    <h2 className={TopLevelHeader}>
                        {examTitle} 
                    </h2>
                    <button className={`${examStatus == "Active" ? SuccessButtonClass : SecondaryButtonCLass } font-bold text-sm button w-fit`}
                    onClick={() => updateExam(examKey, examStatus)}> Exam is {examStatus}</button>

                </div>


                <div className="flex items-center justify-between w-full">
                    <SetTimeComponent 
                        examKey={examKey}
                        duration={duration}
                    />
                    
                    <ImportQuestions fetchQuestions={fetchQuestions} examKey ={examKey} setExamStatus={setExamStatus} examStatus={examStatus}/>
                    {/* <p>Duration: </p> */}
                    
                    

                </div>

            </section>

            {/* MAKE EACH QUESTION LIST TO BE LIKE QUESTION FORM AND IT IS THE EDITABLE VERSION OF IT */}
            <QuestionList 
                savedQuestions={savedQuestions}
                i={i}
                editQuestionInfo={editQuestionInfo}
                setEditQuestionInfo={setEditQuestionInfo}
            />

            <AddQuestionForm examKey={examKey} fetchQuestions={fetchQuestions}/>

            {
                savedQuestions.length < 1 ? <p style={{
                    paddingLeft: 5+'%'
                }}>No saved Question</p> :
                ''
            }
                {
                    showEditQuestion &&
                    <EditQuestion editQuestionInfo={editQuestionInfo} setShowEditQuestion={setShowEditQuestion}
                    />
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