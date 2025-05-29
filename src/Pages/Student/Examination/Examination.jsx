import axios from "axios"
import Cookie from "js-cookie"
import { useEffect } from "react"
import { useRef } from "react"
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { AppContext } from "../../../App"
import { ExamInterface } from "./ExamInterface"
import { dbLocation, PrimaryButtonCLass, SecondaryButtonCLass, TopLevelHeader } from "../../../assets/Constants"
import InfoComponent from "../../../Components/InfoComponent"
import { GetQuestionLength } from "../../../Components/GetQuestionLength"
import { useDispatch, useSelector } from "react-redux"
import { useUpdateStudentDetails } from "../../../assets/Hooks/useUpdateStudentDetails"
import { useUpdateExamDetails } from "../../../assets/Hooks/useUpdateExamDetails"
import { FormatDate, FormatTime } from "../../../assets/Functions"
import { setShowTopNav } from "../../../assets/store/NavigationSlice"
import { Link } from "react-router-dom"


export const Examination = () => {
    const { setExamQuestions, savedQuestions } = useContext(AppContext)
    const [ correctAns, setCorrectAns ] = useState([])
    const [ startedExam, setStartedExam ] = useState(false)
    const [ countdown, setCountdown ] = useState(0)
    const [ submittedExam, setSubmittedExam ] = useState(false)
    const [ score, setScore ] = useState(0)
    const [ showScore, setShowScore ] = useState(false)
    const [ answers, setAnswers ] = useState([])

    
    
    const timerId = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate('/')
    const updateStudentDetails = useUpdateStudentDetails()
    const updateExamDetails = useUpdateExamDetails()


    const examDetails = useSelector(state => state.examslice)
    const examTitle = examDetails.examTitle
    const examKey = examDetails.examKey
    const totalScore = examDetails.totalScore


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
            const exDetails = JSON.parse(cookiedExamDetails)
            updateStudentDetails(JSON.parse(cookiedStudentDetails))
            updateExamDetails(JSON.parse(cookiedExamDetails))
            setCountdown(exDetails.duration || examDetails.duration)
            dispatch(setShowTopNav(false))
        }
    }, [])
    

    

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


    useEffect(() => {
        if(submittedExam){
            clearInterval(timerId.current)
            setShowScore(true)
        }
    }, [submittedExam])

    
   
    const StartTimer = () =>{
        timerId.current = setInterval(() =>{
            setCountdown(prev => prev > 0 ? prev - 1 : 0)
        }, 1000)
        return () => clearInterval(timerId.current)
    }


    const closeExam = () => {
        setSubmittedExam(false)    
        setStartedExam(false)
        setCountdown(0)
        setScore(0)
    }
    
    const SaveReport = () => {
        let today = new Date()
        let date = FormatDate(today)
        let userscore = 0

        savedQuestions.forEach((question, i) =>{
            if(question.answer == answers[i]){
                userscore += question.points
            }    
        })

        const saveinfo = {
            examKey: examDetails.examKey,
            studentId: studentDetails.id,
            score: userscore,
            timeUsed: examDetails.duration - countdown,
            date: date,
            totalScore: totalScore
          }

        //   console.table(saveinfo)
          axios.post(`${dbLocation}/examResults.php/save`, saveinfo)
          .then((response) => {
            // console.log(response.data)
            
            
          })
    }
    
    const fetchQuestions = async (examKey) =>{
        
        
        await axios.get(`${dbLocation}/examquestions.php/${examKey}`, examKey).then(function(response){
            const questions = response.data
            setStartedExam(true)
            const shuffledQuestions = questions.sort(() => Math.random() - 0.5)
            setExamQuestions(shuffledQuestions)
        }) 
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
      
      <main className="mt-[5vh] w-full center flex-col mb-[10vh]">
        <div className="flex flex-wrap w-11/12 lg:gap-3 items-center justify-between mb-7">
            <div className={ TopLevelHeader + " mb-3"}> 
                {examTitle}
            </div>
            {
                (startedExam || submittedExam) &&
                <p className={`${countdown < 600 ? "bg-red-400 animate-pulse" : ""} bg-gray-100 shadow-lg p-3 rounded-xl text-[15px]`}>{FormatTime(countdown)}</p>
            }
        </div>      
        {
            !startedExam ?
            <div className="flex flex-col w-11/12 gap-3">
                
                <div className="flex flex-col md:flex-row justify-between gap-3">
                    <InfoComponent 
                        title={"Full Name:"}
                        info={`${firstName} ${studentDetails.middleName} ${lastName}`}
                    />

                    <InfoComponent 
                        title={"Matric Number:"}
                        info={matricNumber}
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-3">
                    <InfoComponent 
                        title={"Faculty:"}
                        info={faculty}
                    />

                    <div className="w-full md:w-4/12">
                    <InfoComponent 
                        title={"Level:"}
                        info={level}
                    />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-3">
                    <div className="w-full md:w-5/12">
                    <InfoComponent 
                        title={"Department:"}
                        info={department}
                    />
                    </div>

                    <div className="flex flex-col md:flex-row w-full md:w-7/12 gap-3">
                        <div className="w-full lg:w-4/12">

                            <InfoComponent 
                                title={"Questions:"}
                                info={<GetQuestionLength examKey={examKey} />}
                            />
                        </div>
                    <InfoComponent 
                        title={"Duration:"}
                        info={FormatTime(countdown)}
                    />
                    </div>
                </div>

                <Instruction />

                <button
                    onClick={() => {
                        setStartedExam(true)
                        fetchQuestions(examKey) 
                        StartTimer()                       
                    }} 
                    className={`${PrimaryButtonCLass} w-fit my-9 min-w-[150px] mb-12`}>
                    Start Exam
                </button>
            </div> : 
            <ExamInterface 
                submittedExam={submittedExam} 
                setSubmittedExam={setSubmittedExam}
                countdown={countdown}
                SaveReport={SaveReport}
                setScore={setScore}
                closeExam={closeExam}
                answers={answers}
                setAnswers={setAnswers}
            />
        }

        
    {
        showScore &&
        <div className="fixed top-0 left-0 bg-black  w-full h-screen center backdrop-blur-[2px] bg-opacity-50 z-[20]">
            <div className="center flex-col gap-4 bg-white h-[40vh] w-11/12 md:w-8/12 lg:w-6/12 xl:w-6/12 rounded-xl shadow-xl p-9  transition-all duration-500 ease-in-out">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">Score: </h3>
                    <p> {score} </p>
                </div>
                
                <div className="flex justify-between gap-5">
                    <button className={`${PrimaryButtonCLass}`}
                    onClick={() => {
                        setShowScore(false)
                    }}>
                        View Questions
                    </button>

                    <Link to={`/student/${firstName}-${lastName}`} className={`${SecondaryButtonCLass} `}
                    onClick={() => {
                        closeExam()
                    }}>
                        Return to Home Page
                    </Link>
                </div>
            </div>
        </div>
    } 
    
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