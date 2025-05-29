import { useState, useEffect, useContext, useRef } from "react"
import { AppContext } from "../../../App"
import { useDispatch, useSelector } from "react-redux"
import { dbLocation, PrimaryButtonCLass, SecondaryButtonCLass, TextInputClass } from "../../../assets/Constants"
import { useMyConfirmBox } from "../../../assets/Hooks/useMyConfirmBox"
import { setConfirmedAction } from "../../../assets/store/ConfirmBoxSlice"
import { Link } from "react-router-dom"
import axios from "axios"
import { FormatDate } from "../../../assets/Functions"



export const ExamInterface = ({submittedExam, setSubmittedExam, countdown, setScore, closeExam, SaveReport, answers, setAnswers }) =>{
    const { savedQuestions, fetchQuestions } = useContext(AppContext)
    const [ shuffledQuestions, setShuffledQuestions ] = useState([])
    

    const useConfirmBox = useMyConfirmBox()
    const dispatch = useDispatch()
    const sliderRef = useRef(null)
    const ButtonRightRef = useRef(null)

    const confirmBoxState = useSelector((state) => state.confirmBox)  
    const examDetails = useSelector(state => state.examslice)

    const studentDetails = useSelector(state => state.studentslice)
    const firstName = studentDetails.firstName
    const lastName = studentDetails.lastName

    const [startX, setStartX ] = useState(0)
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ submitExamClicked, setSubmitExamClicked ] = useState(false)

    const NextQuestion = () => {
        setCurrentQuestion(prev => prev < shuffledQuestions.length -1 ? prev + 1 : prev)
    }
    const PreviousQuestion = () =>{
        setCurrentQuestion(prev => prev == 0 ? 0 : prev - 1 )
    }

    const handleTouchStart = (e) => { 
        setStartX(e.touches[0].clientX)
    }
    
    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - startX
        if(deltaX > 0){
            PreviousQuestion()
        }
        if(deltaX < 0){
            NextQuestion()
        }
    }

    useEffect(() =>{
        fetchQuestions(examDetails.examKey)
        // StartTimer()
        if(shuffledQuestions.length > 0) {
            setAnswers(shuffledQuestions.map((s, i) => (i+1)))
        }

    }, [examDetails.examKey])

    useEffect(() =>{
        setShuffledQuestions(savedQuestions.sort(() => Math.random() - 0.5))
    }, [savedQuestions])

    const KeyBoardControls = (e) =>{
        if(e.key == 'ArrowRight'){
            ButtonRightRef.current?.click()
        }
        if(e.key == "ArrowLeft"){
            PreviousQuestion()
        }
    }
    
    useEffect(() => {
        // StartTimer()
        // to prevent the confirmed action from being true initially by any chance 

        dispatch(setConfirmedAction(false))

        document.addEventListener('keydown', KeyBoardControls)

        return () => document.removeEventListener('keydown', KeyBoardControls)
    }, [])

    useEffect(() => {
        if(countdown == 0 && examDetails.duration > 0){
            MarkExam()
            // console.log("mark")
        }
    }, [countdown])
        

    useEffect(() => {
        if(confirmBoxState.confirmedAction && submitExamClicked){ 
          MarkExam()
        }
    }, [confirmBoxState.confirmedAction])

    
    const HandleExamSubmit = () => {
        let a = 0
        shuffledQuestions.forEach((question, i) => {
            if(typeof(answers[i]) != "string"){
                a += 1
            }
        })
        useConfirmBox('Do you want to submit exam?',`${ a > 0 ? `${a} question${a>1?"s" : ""} not yet answered` : ""}`)
    }


    const MarkExam = () => {
        // console.log("marked")
        
        shuffledQuestions.forEach((question, i) =>{
            if(question.answer == answers[i]){
                setScore(prev => prev + question.points)
            }    
        })
        setSubmittedExam(true)
        SaveReport()
    }

 
    return(
        <section className="w-full flex flex-col overflow-hidden pt-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
        >
            
            <div className="w-full center">
                <div className="flex flex-wrap gap-2 w-11/12">
                    {
                        shuffledQuestions.map((q, i) => (
                            <p key={i}
                            className={`
                                ${
                                    submittedExam ? 
                                        q.answer == answers[i] ? "bg-green-200 hover:bg-green-400" : "bg-red-200 hover:bg-red-400"
                                    : 
                                    typeof(answers[i]) == "string" ? "bg-green-200 hover:bg-green-200" : "bg-gray-100 hover:bg-gray-200"
                                }
                                    ${currentQuestion == i && "scale-[1.25] shadow-md"} transition-all ease-in-out duration-500
                                w-8 h-8 rounded-full center text-sm cursor-pointer`}
                                onClick={() => {
                                    setCurrentQuestion(i)
                                }}
                            >{i+1}</p>
                        ))
                    }
                </div>
            </div>
            
            <div className={`flex transition-all duration-500`}
            style={{
                translate: -currentQuestion*100+"vw",
                width: shuffledQuestions.length*100+"vw"
            }}>
                {
                    shuffledQuestions?.map((question, i) => (
                     <EachQuestionsComponent 
                     question={question}
                     setAnswers={setAnswers}
                     answers={answers}
                     submittedExam={submittedExam}
                     key={i} 
                     i={i}
                     />
                    ))
                }
            </div>
            
            <div className="center w-full md:mt-3">

                <div className="w-11/12 center justify-between lg:justify-center gap-4 lg:gap-9">
                    <button className={`${SecondaryButtonCLass} w-[150px] disabled:scale-90 disabled:opacity-40 disabled:cursor-not-allowed`} 
                    onClick={() => {PreviousQuestion()                    
                    }}
                    disabled={currentQuestion == 0}
                    >
                        Previous
                    </button>
                    
                    {
                        submittedExam ?
                            <Link to={`/student/${firstName}-${lastName}`} className={`${PrimaryButtonCLass} center`}
                                onClick={() => {
                                    closeExam()
                                }}>
                                Return Home
                            </Link>:
                    <button className={`${PrimaryButtonCLass} w-[150px] disabled:scale-90 disabled:opacity-40 disabled:cursor-not-allowed`}
                    onClick={() => {
                        HandleExamSubmit()
                        setSubmitExamClicked(true)
                    }}
                    disabled={submittedExam}
                    >Submit</button>
                    }

                    <button className={`${SecondaryButtonCLass} w-[150px] disabled:scale-90 disabled:opacity-40 disabled:cursor-not-allowed`} 
                    ref={ButtonRightRef}
                    onClick={() => {
                        NextQuestion()                    
                    }}
                    disabled={currentQuestion == shuffledQuestions.length -1}
                    >
                        Next
                    </button>
                </div>
            </div>
            
            
        </section>
    )
}


const EachQuestionsComponent = ({question, i, setAnswers, answers, submittedExam}) => {
    const [ selectedAnswer, setSelectedAnswer ] = useState("")

    return(
        <section className="flex justify-center items-start gap-4 w-screen my-4">

    
        <div className=" flex flex-col w-11/12 gap-5 lg:gap-9 bg-gray-100 p-5 lg:p-9 rounded-xl shadow-lg">
            <div className="flex flex-col gap-3 w-full">
                {/* Question Type and Point */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        {i +1}. 
                        <h2 className='outline-none bg-none bg-transparent min-w-[150px] text-sm font-bold text-gray-600 cursor-pointer capitalize opacity-70'>
                            {question.questionType}
                        </h2>

                    </div>
        
                    <p className='center bg-white  h-10 w-10 text-sm rounded-lg shadow'>{question.points} Pt</p>
                </div>
                
                {/* Question */}
                <div className="center flex-col md:flex-row gap-1 md:gap-3 w-full">
                    <h5 className='font-bold text-gray-700 w-full md:w-fit'>Question:</h5>
                    <p className={" w-full "}>{question.question} </p>
    
                </div>
            </div>

    
            {/* Options */}
            <div className="flex flex-col gap-5 lg:gap-9 justify-between md:grid md:grid-cols-2">
  
                <OptionComponent 
                    setSelectedAnswer={setSelectedAnswer}
                    setAnswers={setAnswers}
                    submittedExam={submittedExam} 
                    question={question} 
                    selectedAnswer={selectedAnswer} 
                    option={"optionA"} 
                    value={"A"}
                    i={i}
                />
            
                <OptionComponent 
                    setSelectedAnswer={setSelectedAnswer}
                    setAnswers={setAnswers}
                    submittedExam={submittedExam} 
                    question={question} 
                    selectedAnswer={selectedAnswer} 
                    option={"optionB"} 
                    value={"B"}
                    i={i}
                />         
    
             
    
                {   question.questionType !== "true/false" &&
                    <>
                     
                    <OptionComponent 
                        setSelectedAnswer={setSelectedAnswer}
                        setAnswers={setAnswers}
                        submittedExam={submittedExam} 
                        question={question} 
                        selectedAnswer={selectedAnswer} 
                        option={"optionC"} 
                        value={"C"}
                        i={i}
                    />         
        
             
                    <OptionComponent 
                        setSelectedAnswer={setSelectedAnswer}
                        setAnswers={setAnswers}
                        submittedExam={submittedExam} 
                        question={question} 
                        selectedAnswer={selectedAnswer} 
                        option={"optionD"} 
                        value={"D"}
                        i={i}
                    />         
        
                    </> 
                }
    
    
    
            </div>
            
        </div>
            
    
    </section>
    )
}

// option bg logic
{/* 
    if(submittedExam) {
        if(question.answer === "A") {
            "bg-green-800 text-white" 
        }
        else if (selectedAnswer === "A" && question.answer !== "A"){
            "bg-red-800 text-white" 
        }
        else{
            "bg-white text-gray-600"
        }
    }else{
        if(selectedAnswer == A){
            "bg-green-800 text-white"}
        }else{
            "bg-white text-gray-600"
        }
*/}

const OptionComponent = ({setSelectedAnswer, setAnswers, submittedExam, question, selectedAnswer, option, value, i}) => {
    return(
        <div className={'flex items-center w-full gap-2 lg:gap-3 cursor-pointer'}
        disabled={submittedExam}
        onClick={() => {
            if(!submittedExam){

                setSelectedAnswer(value)
                setAnswers(prevAnswers => {
                    const updatedAnswers = [...prevAnswers];
                    updatedAnswers[i] = value; // or "B", value, etc.
                    return updatedAnswers;
                });
            }
            
            }}>
            <p className={`text-l font-bold rounded-full w-10 h-9 shadow center cursor-pointer 
            ${
                submittedExam ? 
                    (question.answer === value) ? "bg-green-800 text-white" :
                    (selectedAnswer === value && question.answer !== value) ? "bg-red-800 text-white" :
                    "bg-white text-gray-600"
                : 
                selectedAnswer == value ? "bg-green-800 text-white" : "bg-white text-gray-600"
            }
            
            `}>{value}</p>
            <p className={` w-full bg-white p-2 lg:p-3 rounded-lg lg:rounded-xl`} >{question[option]}</p>
        </div>   
    )
}