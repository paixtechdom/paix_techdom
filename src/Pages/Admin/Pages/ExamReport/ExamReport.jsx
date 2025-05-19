import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setExamKey } from "../../../../assets/store/ExamSlice"
import Cookie from "js-cookie"
import { useNavigate } from "react-router-dom"
import { dbLocation, TopLevelHeader } from "../../../../assets/Constants"
import InfoComponent from "../../../../Components/InfoComponent"
import axios from "axios"
import { useMyAlert } from "../../../../assets/Hooks/useMyAlert"
import { useUpdateExamDetails } from "../../../../assets/Hooks/useUpdateExamDetails"
import { FormatTime } from "../../../../assets/Functions"

const Students = [
    {score: 65},
    {score: 57},
    {score: 49},
    {score: 70},
    {score: 60},
    {score: 42},
    {score: 90},
    {score: 39},
    {score: 89},
    {score: 90},
]
export const ExamReport = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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

    const cookiedExamKey = Cookie.get('examKey')


    const FetchExam = async (key) => {
        await axios.get(`${dbLocation}/exams.php/${key}/fetch`)
        .then((res) => {
            const exam = res.data[0]

            if(exam == undefined){
                navigate("/exams/all-exams") 
                triggerAlert("error", "Error Fetching Exam undefined")
                return
            }
            
            if((window.document.URL).split("/")[5].toLowerCase() !== exam.examTitle.toLowerCase().replaceAll(" ", "-")){
                triggerAlert("error", "Error Fetching Exam")
                navigate("/page-not-found")
                return
            }

            updateExamDetails(exam)

        })
        .catch(() => {
            triggerAlert("error", "Error Fetching Exam catch")
            navigate("/exams/all-exams")            
        })
    }



    useEffect(() =>{
        dispatch(setExamKey(cookiedExamKey))
        FetchExam(cookiedExamKey || examKey)

        if(examKey == "" && cookiedExamKey == ""){
            navigate("/exams/all-exams")
        }
    }, [])


    return(
        <main className="w-full center pt-[15vh]">
            <div className="w-11/12 center flex-col gap-12">

                <div className="flex flex-col w-full gap-5">
                    <h2 className={`${TopLevelHeader} w-full`}>Exam Report</h2>
                

                    <h2 className={`font-bold w-full text-2xl`}> <span className="text-xl font-light">Title:</span> {examTitle}</h2>

                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                        <InfoComponent 
                            title={"Faculty:"}
                            info={faculty}
                        />
                        <InfoComponent 
                            title={"Department:"}
                            info={department}
                        />
                        <div className="flex items-center justify-between gap-4">
                            <InfoComponent 
                                title={"Level:"}
                                info={level}
                            />
                            <InfoComponent 
                                title={"Duration:"}
                                info={FormatTime(duration)}
                            />
                        </div>
                    </div>
                </div>


                <PerformanceChart />

            </div>
        </main>
    )
}


const PerformanceChart = ({}) => {
    const [ performance, setPerformance ] = useState({
        passed: 0,
        failed: 0,
        average: 0,
    })
    const UpdatePerformanceState = (type) => {
        setPerformance({
            ...performance,
            [type]: performance[type] += 1
        })
    }

    useEffect(() => {
        Students.forEach(s => 
            s.score >= 55 ? UpdatePerformanceState("passed") : 
            s.score <= 45 ? UpdatePerformanceState("failed") : 
            s.score > 45 && s.score < 55 ? UpdatePerformanceState("average") : ""
        )
    }, [])

    return(
        <section className="flex w-full flex-col gap-3">
            <div className="flex w-full bg-gray-100 relative h-[2vh] rounded-full xl shadow-md overflow-hidden">
        
                <PerformanceInfo 
                    performance={performance}
                    type={"passed"}
                    color={"green-500"}
                />
        
                <PerformanceInfo 
                    performance={performance}
                    type={"average"}
                    color={"gray-500"}
                />
        
                <PerformanceInfo 
                    performance={performance}
                    type={"failed"}
                    color={"red-600"}
                />

            </div>

            <div className="flex items-center text-sm gap-5">
                <div className="center gap-1">
                    <p className="h-3 w-3 bg-green-500 rounded-full"></p>
                    Passed: {performance.passed}
                </div>
                <div className="center gap-1">
                    <p className="h-3 w-3 bg-gray-500 rounded-full"></p>
                    Average: {performance.average}
                </div>
                <div className="center gap-1">
                    <p className="h-3 w-3 bg-red-600 rounded-full"></p>
                    Failed: {performance.failed}
                </div>
            </div>
        </section>
    )

}

const PerformanceInfo = ({performance, type, color}) =>{
    return(
        <div className={`bg-${color} h-full relative`} style={{
            width: ((performance[type] / Students.length) * 100) + "%"
        }}>
        </div>
    )
}