import axios from "axios"
import Cookie from "js-cookie"
import { useEffect } from "react"
import { useRef } from "react"
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { AppContext } from "../../../App"
import { ExamInterface } from "./ExamInterface"
import { dbLocation, PrimaryButtonCLass, TopLevelHeader } from "../../../assets/Constants"
import InfoComponent from "../../../Components/InfoComponent"
import { GetQuestionLength } from "../../../Components/GetQuestionLength"
import { useDispatch, useSelector } from "react-redux"
import { useUpdateStudentDetails } from "../../../assets/Hooks/useUpdateStudentDetails"
import { useUpdateExamDetails } from "../../../assets/Hooks/useUpdateExamDetails"
import { FormatTime } from "../../../assets/Functions"
import { setShowTopNav } from "../../../assets/store/NavigationSlice"


export const Examination = () => {
    const { setExamQuestions } = useContext(AppContext)
    const [ correctAns, setCorrectAns ] = useState([])
    const [ startedExam, setStartedExam ] = useState(false)
    const [ countdown, setCountdown ] = useState(0)


    const dispatch = useDispatch()
    const navigate = useNavigate('/')
    const updateStudentDetails = useUpdateStudentDetails()
    const updateExamDetails = useUpdateExamDetails()


    const examDetails = useSelector(state => state.examslice)
    const examTitle = examDetails.examTitle
    const examKey = examDetails.examKey


    const studentDetails = useSelector(state => state.studentslice)
    const department = studentDetails.department
    const level = studentDetails.level
    const faculty = studentDetails.faculty
    const matricNumber = studentDetails.matricNumber
    const firstName = studentDetails.firstName
    const lastName = studentDetails.lastName
    
    
    const cookiedStudentDetails = Cookie.get("userDetails")
    const cookiedExamDetails = Cookie.get("examDetails")

    useEffect(() =>{
        if(cookiedStudentDetails != undefined && cookiedExamDetails != undefined){
            updateStudentDetails(JSON.parse(cookiedStudentDetails))
            updateExamDetails(JSON.parse(cookiedExamDetails))
            dispatch(setShowTopNav(false))
            setCountdown(examDetails.duration)
        }
    }, [])
    

    useEffect(() =>{
        // setExamQuestions('')
        // setScore(0)
        // setShowScore(false)
        // setStartedExam(false)
        // setExamEnded(false)
        // setMarkedExam('false')
        // console.table(studentDetails)
        // console.table(examDetails)
    }, [])
 

    // useEffect(() =>{
    //     if(countdown == 1){
    //         setScore(0)
    //         setTimeout(() => {
    //             setMarkedExam('mark')
    //         }, 900);
    //     } 
    // }, [countdown])

    
    // useEffect(() =>{
        
    //     if(countdown == 0){
    //         clearInterval(timerId.current)
    //         setCountdown(10000)
    //         submitExam(score, examQuestions.length)
    //         setInterval(() => {
    //             setMarking(false)
    //         }, 3000);
    //     } 
    // }, [countdown, submitExam])



//   const handleLeavePage = (event) => {
//     // submitExam(score, examQuestions.length)
//       if (document.visibilityState == 'hidden'){
//           setMarkedExam('mark')
//           console.log(score, 'hidden')
        
//     }
//     if (document.visibilityState == 'visible'){
//         console.log(score, 'visible')
//         setMarkedExam('false')
//         // submitExam(score, examQuestions.length)
//     }
//     };
    
//     useEffect(() => {
//         if(startedExam == true){
         
            
//             // Attach the event listener when the component mounts
//             // window.addEventListener('beforeunload', handleLeavePage);
//             window.addEventListener('visibilitychange', () =>{
//                 handleLeavePage()
//         });
//         // window.addEventListener('popstate', handleLeavePage);
    
//         // Remove the event listener when the component unmounts
//         return () => {
//         //   window.removeEventListener('beforeunload', handleLeavePage);
//           window.removeEventListener('visibilitychange', handleLeavePage);
//         //   window.removeEventListener('popstate', handleLeavePage);
//         };
//     }
//   }, [startedExam]);



    
   
    const StartTimer = () =>{
        const timerId = setInterval(() =>{
            setCountdown(prev => prev -= 1)
        }, 1000)
        return () => clearInterval(timerId)
    }



    
    
    const fetchQuestions = async (examKey) =>{
        
        
        await axios.get(`${dbLocation}/examquestions.php/${examKey}`, examKey).then(function(response){
            const questions = response.data
            setStartedExam(true)
            const shuffledQuestions = questions.sort(() => Math.random() - 0.5)
            setExamQuestions(shuffledQuestions)
        }) 
        // await axios.get(`${dbLocation}/exams.php/${examKey}/duration`).then(function(response){
        //     let res = response.data
        //     // setCountdown(5)
        //     setCountdown(res[0].duration)
        // }) 
        // startTimer()
    }
    

//   const back = () =>{
//     if(startedExam == true){
//         setConfirm(true)
//         setConfirmFunction('submitExam')
//         setConfirmMessage(`Going back automatically submits the exam, do you want to submit?`) 
//         setMarkedExam('mark')
//     }else{
//         navigate(`/Student/${userName}`)

//     }
//   }



  return (
      
      <main className="mt-[5vh] w-full center flex-col">      
        <div className={ TopLevelHeader + " w-11/12 mb-3"}> 
            {examTitle}
        </div>

        {FormatTime(countdown)}
        {
            !startedExam ?
            <div className="flex flex-col w-11/12 gap-3">
                
                <div className="flex flex-col lg:flex-row justify-between gap-3">
                    <InfoComponent 
                        title={"Full Name:"}
                        info={`${firstName} ${studentDetails.middleName} ${lastName}`}
                    />

                    <InfoComponent 
                        title={"Matric Number:"}
                        info={matricNumber}
                    />
                </div>

                <div className="flex justify-between gap-3">
                    <InfoComponent 
                        title={"Faculty:"}
                        info={faculty}
                    />

                    <div className="w-4/12">
                    <InfoComponent 
                        title={"Level:"}
                        info={level}
                    />
                    </div>
                </div>

                <div className="flex justify-between gap-3">
                    
                    <InfoComponent 
                        title={"Department:"}
                        info={department}
                    />

                    <div className="w-4/12">

                    <InfoComponent 
                        title={"Questions:"}
                        info={<GetQuestionLength examKey={examKey} />}
                    />
                    </div>
                </div>

                <Instruction />

                <button
                    onClick={() => {
                        setStartedExam(true)
                        fetchQuestions(examKey)
                        // setScore(0)
                        
                    }} 
                    className={`${PrimaryButtonCLass} w-fit my-9 min-w-[150px] mb-12`}>
                    Start Exam
                </button>
            </div> : 
           <ExamInterface 
            StartTimer={StartTimer}
            />
        }
        



   

              {/* {
                  showScore &&
                  <div className="score">
                      <div>
                          <h3>Score</h3>
                      <p>
                          <span>{score}</span> right answer(s) 
                      </p>
                      <p>
                          <span>{examQuestions.length - score}</span> wrong answer(s)
                      </p>
                      <p>
                          Total number of questions: <span>{examQuestions.length}</span>
                      </p>
                      </div>
                  </div>
               }  */}
          
        
      </main>
  )
}

export const Instruction = () =>{
    const instructions = [
        "All questions are either multiple choice questions or True/False questions",
        "Each question carries different marks",
        "Questions are displayed randomly for each student",
        "If you refresh the page, go to another tab or go back to the previous page, the exam will automatically be submitted",
        "You will get your result immediately after the exam",
    ]
    return(
        <div className="mt-9 flex flex-col w-full gap-1">
            <h3 className="font-bold text-gray-800 text-xl">General Instructions</h3>
            <p className="text-red-900 text-sm">Read the instructions carefully before starting the exam</p>


            <div className="flex flex-col gap-3 text-gray-900 mt-4">
                {instructions.map((i, key) => (
                    <div key={key} className="flex gap-1">
                        <i className="bi bi-circle-fill scale-75 text-gray-500"></i>
                        <p className="">
                            {i}
                        </p>

                    </div>
                ))}
            </div>
           
        </div>
    )
}