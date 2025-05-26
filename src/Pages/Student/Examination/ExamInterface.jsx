import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../../App"
import { useSelector } from "react-redux"
import { PrimaryButtonCLass, SecondaryButtonCLass, TextInputClass } from "../../../assets/Constants"
import { useMyConfirmBox } from "../../../assets/Hooks/useMyConfirmBox"



export const ExamInterface = ({StartTimer}) =>{
    const { savedQuestions, login, fetchQuestions } = useContext(AppContext)
    const examDetails = useSelector(state => state.examslice)
    const [useConfirmBox] = useMyConfirmBox()
    
    const confirmedAction = useSelector((state) => state.confirmBox.confirmedAction)  

    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ answers, setAnswers ] = useState([])
    const [ score, setScore ] = useState(0)
    const [ submittedExam, setSubmittedExam ] = useState(false)

    useEffect(() =>{
        fetchQuestions(examDetails.examKey)
        // StartTimer()
        if(savedQuestions.length > 0) {
            setAnswers(savedQuestions.map((s, i) => (i+1)))
        }

    }, [examDetails.examKey])

    const NextQuestion = () => {
        setCurrentQuestion(prev => prev < savedQuestions.length -1 ? prev + 1 : prev)
    }
    const PreviousQuestion = () =>{
        setCurrentQuestion(prev => prev == 0 ? 0 : prev - 1 )
    }

    const HandleExamSubmit = () => {
        let a = 0
        savedQuestions.forEach((question, i) => {
            if(typeof(answers[i]) != "string"){
                a += 1
            }
        })
        useConfirmBox('Do you want to submit exam?',`${ a > 0 ? `${a} questions not yet answered` : ""}`)

    }


    const MarkExam = () => {

        savedQuestions.forEach((question, i) =>{

            if(question.answer == answers[i]){
            setScore(prev => prev + question.points)
            console.log(question.answer, 1+1, "right")

        }else{
            console.log(i+1, " wrong", question.answer)
        }
        setSubmittedExam(true)
    })
    }

    return(
        <section className="w-full flex flex-col overflow-hidden">
            {/* Submit button <br />
            mark exam <br />
            show questions not attempted <br /> */}
            {score}
            <div className="w-full center">

            <div className="flex flex-wrap gap-2 w-11/12">
                {
                    savedQuestions.map((q, i) => (
                        <p key={i}
                        className={`${typeof(answers[i]) != "string" ? "bg-gray-200 hover:bg-gray-400" : "bg-green-200 hover:bg-green-200" } w-8 h-7 rounded-full shadow-md center text-sm cursor-pointer`}
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
                width: savedQuestions.length*100+"vw"
            }}>
                {
                    savedQuestions?.map((question, i) => (
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

            <div className="w-full center justify-between lg:justify-center gap-9 mt-[1vh]">
                <button className={`${SecondaryButtonCLass} w-[150px] disabled:scale-90 disabled:opacity-40 disabled:cursor-not-allowed`} 
                onClick={() => {PreviousQuestion()                    
                }}
                disabled={currentQuestion == 0}
                >
                    Previous
                </button>

                <button className={`${PrimaryButtonCLass} w-[150px] disabled:scale-90 disabled:opacity-40 disabled:cursor-not-allowed`}
                    onClick={() => {HandleExamSubmit()}}
                    disabled={submittedExam}
                >Submit</button>

                <button className={`${SecondaryButtonCLass} w-[150px] disabled:scale-90 disabled:opacity-40 disabled:cursor-not-allowed`} 
                onClick={() => {NextQuestion()                    
                }}
                disabled={currentQuestion == savedQuestions.length -1}
                >
                    Next
                </button>
            </div>
            
            
        </section>
    )
}


const EachQuestionsComponent = ({question, i, setAnswers, answers, submittedExam}) => {
    const [ selectedAnswer, setSelectedAnswer ] = useState("")

    return(
        <section className="flex justify-center items-start gap-4 w-full my-4">

    
        <div className=" flex flex-col w-11/12 gap-9 bg-gray-100 p-9 rounded-xl shadow-lg">
            <div className="flex flex-col gap-3 w-full">
                {/* Question Type and Point */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        {i +1}. 
                        <h2 className='outline-none bg-none bg-transparent min-w-[150px] font-bold text-gray-600 cursor-pointer capitalize opacity-70'>
                            {question.questionType}
                        </h2>

                    </div>
        
                    <p className='center bg-white  h-10 w-10 text-sm rounded shadow'>{question.points} Pt</p>
                </div>
                
                {/* Question */}
                    <div className="center flex-col md:flex-row gap-3 w-full">
                        <h5 className='text-lg font-bold text-gray-700 w-full md:w-fit'>Question</h5>
                        <p className={" w-full "} 
                        >{question.question} </p>
        
                    </div>
            </div>

    
            {/* Options */}
            <div className="flex flex-col gap-9 justify-between md:grid md:grid-cols-2">
  
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
        <div className={'flex items-center w-full gap-3 cursor-pointer'}
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
            <p className={` w-full bg-white p-3 rounded-xl`} >{question[option]}</p>
        </div>   
    )
}