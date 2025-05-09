import axios from "axios"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../../../App"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Results } from "../Components/Results"
import { NoSubmits } from "../Components/NoSubmits"
import Cookie from "js-cookie"
import { DangerButtonCLass, PrimaryButtonCLass, SecondaryButtonCLass, TopLevelHeader } from "../../../assets/Constants"
 

export const AllExams = () =>{
    const [ examResultTitle, setExamResultTitle ] = useState('')
    const [ resultExamKey, setResultExamKey ] = useState('')
    const [ selectedFaculty, setSelectedFaculty ] = useState('')
    const { userName, setExamTitle, setExamKey, showResult, setShowResult, dbLocation, setExamStatus, examStyle, setExamStyle, setConfirm, setConfirmFunction, setConfirmMessage, setExamKeyTobeDeleted, exams, fetchExams, examKey,  duration, setDuration} = useContext(AppContext)
    const Navigate = useNavigate()
    const [ currentIndex, setCurrentIndex ] = useState(1)




    useEffect(() =>{
        fetchExams()
        Cookie.remove('examKey', {path:'/admin'})
    }, [])
    // useEffect(() => {
    //     console.table(exams)
    // }, [exams])

    


    const [ examValue, setExamValue ] = useState('exam.level')
    const [ filterValue, setFilterValue ] = useState('')

    return (
        <main className='center flex-col w-full mt-[12vh]'> 
  
            <div className="center w-11/12 flex-col">

                <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-3">
                    <h1 className={TopLevelHeader}>Exams</h1>

                    <div className="flex items-center gap-3 w-full lg:w-fit">
                        <Link to={'/exams/add-new'} className={PrimaryButtonCLass + "flex items-center gap-1 "}> <i className="bi bi-plus text-2xl"></i>
                            Create Exam</Link>

                        <Link to="" className={SecondaryButtonCLass + " "}>Generate With AI</Link>
                    </div>
                </div>

                {

                    exams.length == 0 ?
                    <div className="h-[70vh] center flex-col gap-2">
                        <i className="bi bi-file-text text-5xl"></i>
                        <p>No exams added</p>
                        <Link to={'/exams/add-new'} className={PrimaryButtonCLass + "flex items-center gap-1 scale-75"}> <i className="bi bi-plus text-2xl"></i>
                                Create Exam
                        </Link>

                    </div>
                    : 
                    <section className="w-full mt-[7vh] gap-5 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3">
                        {
                        exams?.map((exam, key) =>(                        
                            <AvailableExamBlock 
                            exam={exam} 
                            key={key}/>
                            ))
                        }
                    </section>
                }
            </div>


             
            
          
        {
            showResult &&
            <Results examResultTitle={examResultTitle} examKey={resultExamKey}/>
        }
        </main>
    )
}



const AvailableExamBlock = ({exam}) => (
    <div className="flex flex-col gap-3 rounded-xl bg-gray-50 shadow-lg p-5 relative">
         <span className={`absolute top-0 right-0 w-4 h-4 rounded-tr-xl ${exam.status == "Active" ?  "bg-green-600 animate-pulse" : "bg-gray-700"}`}
        ></span>

        <Link to = {`/Exam/${exam.examTitle.replaceAll(' ', "-")}`} 
        className="font-bold text-lg text-gray-700"
        onClick={e =>{
            setExamKey(exam.examKey)
            setExamStatus(exam.status)
            setDuration(exam.duration)
            
            setExamTitle(exam.examTitle)
            }}> 
            {exam.examTitle}
        </Link>
       
        <p className="flex items-center gap-1"><span>Faculty:</span> {exam.faculty}</p>
        
        <div className="flex justify-between">
            <p className="flex items-center gap-1"><span>Dept: </span> {exam.department}</p>

            <p className="flex items-center gap-1"><span>Level:</span> {exam.level}</p>


        </div>



        <div className="flex justify-between items-center gap-4 mt-4">

            <button className={SecondaryButtonCLass + "w-full lg:scale-90"}  onClick={() =>{ 
                setExamResultTitle(exam.examTitle)
                setResultExamKey(exam.examKey)
                setShowResult(true)
            }}>
                View <NoSubmits examKey={exam.examKey} /> results
            </button>

            <button className={DangerButtonCLass + " w-full lg:scale-90"}  onClick={() =>{
                setExamKeyTobeDeleted(exam.examKey)
                setConfirm(true)
                setConfirmFunction('deleteExam')
                setConfirmMessage(`Do you want to delete ${exam.examTitle}?`) 
            }}>
                Delete Exam
            </button>
        </div>

       
       

</div>
)


// <div className="sortBy">
//     <p>Sort by Level</p>

//     <div>
//         <input type="radio" name="level" id="level" value={100} onClick={(e) => {
//             if(e.target.checked){
//                 setFilterValue(e.target.value)
//             }
//         }}/>
//         <label htmlFor="100">100</label>
//     </div>
//     <div>
//         <input type="radio" name="level" id="level" value={200}  onClick={(e) => {
//             if(e.target.checked){
//                 setFilterValue(e.target.value)
//             }
//         }}/>
//         <label htmlFor="200">200</label>
//     </div>
//     <div>
//         <input type="radio" name="level" id="level" value={300}  onClick={(e) => {
//             if(e.target.checked){
//                 setFilterValue(e.target.value)
//             }
//         }}/>
//         <label htmlFor="300">300</label>
//     </div>
//     <div>
//         <input type="radio" name="level" id="level" value={'All'}  onClick={(e) => {
//             if(e.target.checked){
//                 setFilterValue(e.target.value)
//             }
//         }}/>
//         <label htmlFor="All">All</label>
//     </div>
// </div>