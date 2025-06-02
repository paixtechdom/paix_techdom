import axios from "axios"
import { useEffect, useState } from "react"

import { availableDepartments, dbLocation, PrimaryButtonCLass, SecondaryButtonCLass } from "../../assets/Constants"
import { useDispatch, useSelector } from "react-redux"
import { useUpdateExamDetails } from "../../assets/Hooks/useUpdateExamDetails"
import { useMyAlert } from "../../assets/Hooks/useMyAlert"
import Cookie from "js-cookie"
import { Link } from "react-router-dom"
import InfoComponent from "../../Components/InfoComponent"
import { GetQuestionLength } from "../../Components/GetQuestionLength"
import { FormatTime } from "../../assets/Functions"
import { setQuestionsLength } from "../../assets/store/ExamSlice"
import { useUpdateStudentDetails } from "../../assets/Hooks/useUpdateStudentDetails"

export const AvailableExams = () => {
    const [ isLoadingExams, setIsLoadingExams ] = useState(false)
    const [ exams, setExams ]= useState([])
    const updateStudentDetails = useUpdateStudentDetails()


    const cookiedDetails  = Cookie.get("userDetails")
    useEffect(() =>{


        if(cookiedDetails != undefined){
            const cookiedStudentDetails = JSON.parse(cookiedDetails)
            updateStudentDetails(cookiedStudentDetails)      
            fetchExams(cookiedStudentDetails)
            setIsLoadingExams(true)
        }

    }, [])
    
    const encodeValue = (value) => value.replace(/\s+/g, '-')

    const fetchExams = (studentDetails) =>{        
        axios.get(`${dbLocation}/exams.php/availableExams/${studentDetails.level}/${encodeValue(studentDetails.department)}/${encodeValue(studentDetails.faculty)}/${studentDetails.id}`)
        .then(function(res){
            const exams = res.data
            setExams(exams)
            setIsLoadingExams(false)          
        }) 

    }



    return(
        <section className="my-[10vh] flex flex-col w-full">
            <h3 className="font-bold text-xl text-gray-700">({exams.length}) Available Exams</h3>
            {
                
                exams.length == 0 ?
                <div className="h-[70vh] center flex-col gap-2">
                    <i className="bi bi-file-text text-5xl"></i>
                    <p>No available exam</p>
                </div>
                : 
                    
                    <section className="w-full mt-[7vh] gap-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {exams?.map((exam, i) => (
                        <AvailableExam
                            key={i}
                            exam={exam}
                        />
                    ))
                    }
                    </section>
            }

        </section>
    )
    
    
}   






const AvailableExam = ({exam}) => {
    const dispatch = useDispatch()
    const updateExamDetails = useUpdateExamDetails()
    
    const triggerAlert = useMyAlert()
    const [ length, setLength ] = useState(0)


    useEffect(() => {
        axios.get(`${dbLocation}/examquestions.php/${exam.examKey}/noquestions`)
        .then((res) => {
            setLength(res.data[0].total)
        }) 
    }, [])


    const SetExamInfoGlobally = (exam) => {
    // to update the store and cookie
        // console.table(exam)
        updateExamDetails(exam)

        Cookie.set('examDetails', JSON.stringify(exam), {
            expires: 1,
            sameSite:'strict',
            secure: 'true'
        })
    }

  

    
    // filters from the backend
    // same level or all, same department or all, same faculty or all
    // if exam is active

    // if candidate has not taken the exam - NOT DONE 


    return(
    <Link to={`/Examination/${exam.examKey}`} className={`flex flex-col gap-3 rounded-xl  shadow-lg p-5 relative ${availableDepartments.find(fac => fac.faculty == exam.faculty)?.color}`}>
         <span className={`absolute top-0 right-0 w-4 h-4 rounded-tr-xl ${exam.status == "Active" ?  "bg-green-600 animate-pulse" : "bg-gray-700"}`}
        ></span>

        <div className="font-bold text-lg text-gray-700 hover:underline hover:text-blue-900"
        onClick={() => {
            SetExamInfoGlobally(exam)
            dispatch(setQuestionsLength(length))
        }}> 
            {exam.examTitle}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-3">
            <InfoComponent 
                title={"Faculty:"}
                info={exam.faculty}
            />

            <div className="w-full lg:w-4/12">
            <InfoComponent 
                title={"Level:"}
                info={exam.level}
            />
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-3">
            
            <InfoComponent 
                title={"Department:"}
                info={exam.department}
            />

            <div className="w-full lg:w-4/12">

            <InfoComponent 
                title={"Questions:"}
                info={<GetQuestionLength examKey={exam.examKey} />}
            />
            </div>
        </div>
        


        <div className="flex flex-col md:flex-row justify-between lg:items-center w-full gap-4 mt-4">

            <div className="w-full md:w-fit">
                <InfoComponent 
                    title={"Duration:"}
                    info={FormatTime(exam.duration)}
                />
            </div>

            <div className={PrimaryButtonCLass + " center w-fit lg:scale-90"}  
                onClick={() => {
                    SetExamInfoGlobally(exam)
                    dispatch(setQuestionsLength(length))
                }}>
                Start Exam
            </div>

          
        </div>

    </Link>
)}