import React, { useEffect, useState } from 'react'
import { dbLocation, TopLevelHeader } from '../../../assets/Constants'
import Cookie from 'js-cookie'
import { useUpdateStudentDetails } from '../../../assets/Hooks/useUpdateStudentDetails'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { StudentReportTable } from './StudentReportTable'

// all exams the student has done in table format

export const StudentReports = () => {
  const [ isLoadingExams, setIsLoadingExams ] = useState(false)
  const [ results, setResults ] = useState([])
  const updateStudentDetails = useUpdateStudentDetails()  
  const cookiedDetails  = Cookie.get("userDetails")
  const studentslice = useSelector((state) => state.studentslice)  


  useEffect(() =>{
    if(cookiedDetails != undefined){
        const cookiedStudentDetails = JSON.parse(cookiedDetails)
        updateStudentDetails(cookiedStudentDetails)      
        FetchReports(cookiedStudentDetails.id)
        setIsLoadingExams(true)
    }

  }, [])

  const FetchReports = (id) => {
    axios.get(`${dbLocation}/examResults.php/${id}/student`)
      .then((res) => {
        setResults(res.data)
      })
  }

  return (
    <main className='mt-[15vh] center'>
      <div className="w-11/12 flex flex-col gap-9">
        <h1 className={`${TopLevelHeader} `}>Exam Reports</h1>

        <StudentReportTable 
          data={results || []}
          currentPage={1}
        />
      </div>
    </main>
  )
}
