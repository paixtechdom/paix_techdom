import axios from "axios"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../../../App"

import { Results } from "../Components/Results"
import { NoSubmits } from "../Components/NoSubmits"
import Cookie from "js-cookie"
import { DangerButtonCLass, dbLocation, PrimaryButtonCLass, SecondaryButtonCLass, TopLevelHeader } from "../../../assets/Constants"
import { useDispatch, useSelector } from "react-redux"
import { useUpdateExamDetails } from "../../../assets/Hooks/useUpdateExamDetails"
import { useMyConfirmBox } from "../../../assets/Hooks/useMyConfirmBox"
import { setConfirmedAction } from "../../../assets/store/ConfirmBoxSlice"
import { useMyAlert } from "../../../assets/Hooks/useMyAlert"
import InfoComponent from "../../../Components/InfoComponent"
 

export const AllExams = () =>{
    const [ examResultTitle, setExamResultTitle ] = useState('')
    const [ resultExamKey, setResultExamKey ] = useState('')
    const { userName, showResult, setShowResult, setConfirmMessage, setExamKeyTobeDeleted, exams, fetchExams } = useContext(AppContext)
    const Navigate = useNavigate()
    
    useEffect(() =>{
        fetchExams()
        Cookie.remove('examKey', {path:'/admin'})
    }, [])
    

    return (
        <main className='center flex-col w-full mt-[12vh]'> 
  
            <div className="center w-11/12 flex-col">

                <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-3">
                    <h1 className={TopLevelHeader}>Exams</h1>

                    <div className="flex items-center gap-3 w-full lg:w-fit">
                        <Link to={'/exams/add-new'} className={PrimaryButtonCLass + " "}> Create Exam</Link>

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
                    <section className="w-full mt-[7vh] gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {
                        exams?.map((exam, key) =>(                        
                            <AvailableExamBlock 
                            exam={exam} 
                            key={key}
                            fetchExams={fetchExams}
                            />
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



const AvailableExamBlock = ({exam, fetchExams}) => {
    const dispatch = useDispatch()
    const updateExamDetails = useUpdateExamDetails()
    const [useConfirmBox] = useMyConfirmBox()
    const triggerAlert = useMyAlert()

    const [ deleteClicked, setDeleteClicked ] = useState(false)
    const confirmedAction = useSelector((state) => state.confirmBox.confirmedAction)  
    
    
    const deleteExam = async () =>{
        await axios.delete(`${dbLocation}/exams.php/${exam.examKey}/delete`).then(function(){
          fetchExams()
          triggerAlert("success", `Exam deleted successfully`)
          
        }).catch(() => {
            triggerAlert("error", `Failed to delete Exam`)
        })
        
      }

    useEffect(() => {
        if(confirmedAction && deleteClicked){        
            deleteExam()    
            dispatch(setConfirmedAction(false))
            setDeleteClicked(false)
        }
    }, [confirmedAction])


    return(
    <div className="flex flex-col gap-3 rounded-xl bg-gray-50 shadow-lg p-5 relative">
         <span className={`absolute top-0 right-0 w-4 h-4 rounded-tr-xl ${exam.status == "Active" ?  "bg-green-600 animate-pulse" : "bg-gray-700"}`}
        ></span>

        <Link to = {`/Exam/${exam.examTitle.replaceAll(' ', "-")}`} 
        className="font-bold text-lg text-gray-700 hover:underline hover:text-blue-900"
        onClick={() =>{ 
            updateExamDetails(exam)
            Cookie.set('examKey', exam.examKey, {
                expires: 1,
                sameSite:'strict',
                secure: 'true'
            })            
            }}> 
            {exam.examTitle}
        </Link>
        
        <div className="flex justify-between gap-3">
            <InfoComponent 
                title={"Faculty:"}
                info={exam.faculty}
            />

            <InfoComponent 
                title={"Level:"}
                info={exam.level}
            />
        </div>

        <InfoComponent 
            title={"Department:"}
            info={exam.department}
        />

        <div className="flex justify-between items-center w-full gap-4 mt-4">

            <button className={SecondaryButtonCLass + " w-full lg:scale-90"}  onClick={() =>{ 
                setExamResultTitle(exam.examTitle)
                setResultExamKey(exam.examKey)
                setShowResult(true)
            }}>
                View <NoSubmits examKey={exam.examKey} /> results
            </button>

            <button className={DangerButtonCLass + " w-full lg:scale-90"}  onClick={() =>{
                 setDeleteClicked(true)
                 useConfirmBox('Confirm to delete this exam' ,exam.examTitle)
            }}>
                Delete Exam
            </button>
        </div>

    </div>
)}


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