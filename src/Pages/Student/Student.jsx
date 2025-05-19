import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import { AvailableExams } from "./AvailabeExams"
import { useNavigate } from "react-router"
import InfoComponent from "../../Components/InfoComponent"
import { TopLevelHeader } from "../../assets/Constants"



export const Student = () =>{

    const { userName, studentMatricNumber, studentLevel, studentDepartment, studentFaculty, login, setStartedExam, setExamEnded } =useContext (AppContext)
    const navigate = useNavigate()

    useEffect(() =>{
        // setStartedExam(false)
        // setExamEnded(true)

        // navigate(`/Student/${userName}`)
    }, [])
    return(
        <main className="w-full center flex-col mt-[15vh]">
            <div className="flex w-11/12 flex-col gap-3">

                <h1 className={`${TopLevelHeader}`}>Welcome {userName}</h1>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                    <InfoComponent 
                        title={"Name:"}
                        info={userName}
                    />

                    <InfoComponent 
                        title={"Faculty:"}
                        info={studentFaculty}
                    />
                    <InfoComponent 
                        title={"Matric Number:"}
                        info={studentMatricNumber}
                    />
                    <InfoComponent 
                        title={"Department:"}
                        info={studentDepartment}
                    />
                    <div className="flex items-center justify-between gap-4">
                        <InfoComponent 
                            title={"Level:"}
                            info={studentLevel}
                        />
                    </div>
                </div>
            </div>

    

            {/* <AvailableExams level={studentLevel} department={studentDepartment} faculty={studentFaculty}/> */}
        </main>

        /* shift + alt + a - open comment */
        

    )

    // if(userName == '' ){
    //     return (
    //        <StudentLogin />
    //     )

    // }
}
