import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';

import { createContext, useState, useContext, useEffect, useId, useRef } from 'react';
import Cookie from 'js-cookie'
import axios from 'axios';
// import { Settings } from './Component/Settings/Settings';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home/Home';
import { CreateExam } from './Pages/Admin/Pages/CreateExams/CreateExam';
import { Examination } from './Pages/Student/Examination/Examination';
import { StudentLogin } from './Pages/Student/StudentLogin';
import { StudentRegistration } from './Pages/Student/StudentRegistration';
import { Student } from './Pages/Student/Student';
import { Admin } from './Pages/Admin/Admin';
import { ConfirmBox } from './Components/ConfirmBox';
import { AddNewExam } from './Pages/Admin/Pages/AddNewExam';
import { AllExams } from './Pages/Admin/Pages/AllExams';
import { Login } from './Pages/Admin/Pages/Login';
import { PageNotFound } from './Pages/PageNotFound';
import Alert from './Components/Alert';
import { ExamReport } from './Pages/Admin/Pages/ExamReport/ExamReport';
import { dbLocation } from './assets/Constants';


export const AppContext = createContext()

const Layout = () =>{
  const Navigate = useNavigate()

  const [ userName, setUserName ] = useState('') 
  
  const [ examQuestions, setExamQuestions ] = useState([])
  const [ savedQuestions, setSavedQuestions ] = useState([])
  
    
  const [  duration, setDuration ] = useState(0)
  const [ exams, setExams ] = useState([])
  const [ noAvailableExams, setNoAvailableExams ]= useState([])


  const timerId = useRef()


  const submitExam = (score, totalNoOfQuestions) =>{
    setScore(score)    
    setExamEnded(true) 
    clearInterval(timerId.current)
    setMarking(true)
    setTimeout(() => {
      setMarking(false)
      setShowScore(true)
      // axios.post(`${dbLocation}/examResults.php/save`, {
      //       score: score,
      //       examKey: examKey,
      //       matricNumber: studentMatricNumber,
      //       department: studentDepartment,
      //       faculty: studentFaculty,
      //       level: studentLevel,
      //       studentName: userName
      //     }).then(function(response){
            
      //       setMarkedExam(false)
      //     })
    }, 3000);

}


const Logout = () =>{
  if(userName == 'admin'){
      Navigate('/Login')
  }else{
      Navigate('/Student_login')

  }
  Cookie.remove('userDetails', {path:'/'})
}

const fetchExams = () =>{
  axios.get(`${dbLocation}/exams.php/`).then(function(response){
      setExams(response.data)
  }) 
}

const fetchQuestions = (newExamKey) =>{
  axios.get(`${dbLocation}/examquestions.php/${newExamKey}`)
  .then(function(response){
      // console.table(response.data)
      setSavedQuestions(response.data)
    }) 
  }
  


  return(
    <div className='app z-1'>
   
        
        <AppContext.Provider value={{ savedQuestions, setSavedQuestions, userName, examQuestions, setExamQuestions, noAvailableExams, setNoAvailableExams, submitExam, Logout, fetchExams, exams, setExams, fetchQuestions, duration, setDuration,  timerId }}>
          {
            Cookie.get('userDetails') !== undefined &&
            <Navbar />
          }
        <Alert />
        <Outlet />
        <ConfirmBox />

      </AppContext.Provider> 

 
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />
      },

      // Edit and update exam information and questions
      {
        path: '/exam/:examTitle',
        element: <CreateExam />
      },

      // Create new exam, setting the title, dept, level and faculty
      {
        path: '/exams/add-new',
        element: <AddNewExam />
      },

      // to view all exams from the admin panel
      {
        path: '/exams/all-exams',
        element: <AllExams />
      },

      // to view reports for exams
      {
        path: '/exams/report/:examTitle',
        element: <ExamReport />
      },
      // admin login page
      {
        path: '/Login',
        element: <Login />
      },
      // student login
      {
        path: '/Student_login',
        element: <StudentLogin />
      },
      // student home page
      {
        path: '/Student/:username',
        element: <Student />
      },
      // exam interface
      {
        path: '/examination/:examinationKey',
        element: <Examination />
      },
      
      {
        path: '/dashboard',
        element: <Admin />
      },
      {
        path: '/Student_registration',
        element: <StudentRegistration />
      },
      {
        path: '/*',
        element: <PageNotFound />
      }
    ]
  }
])

function App() {
  
    return (
      <div className='App'>

          <RouterProvider router={router} /> 
      
      </div>
    )



}
export default App;
         