import React, { useState, createContext, useEffect, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import './index.css'
import { Alert } from './Components/Alert'
import { Blog } from './Pages/Blog/Blog';
import { ABlog } from './Pages/Blog/ABlog';
import { Loader } from './Pages/Components/Loader';
import { HeroBg } from './Components/HeroBg';
import { PageNotFound } from './Pages/PageNotFound';

const Navbar = React.lazy(() => delayLoad(import('./Components/Sections/Navbar')))
const Footer = React.lazy(() => delayLoad(import('./Components/Sections/Footer')))
const About = React.lazy(() => delayLoad(import('./Pages/About/About')))
const Services = React.lazy(() => delayLoad(import('./Pages/Services/Services')))
const Home = React.lazy(() => delayLoad(import('./Pages/Home/Home')))
const Contact = React.lazy(() => delayLoad(import('./Pages/Contact/Contact')))



function delayLoad(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export const AppContext = createContext()

const Layout = () =>{
  const [ currentNav, setCurrentNav ] = useState(0)  
  const [ smallScreen, setSmallScreen ] = useState(false)  
  const [ mediumScreen, setMediumScreen  ] = useState(false)  
  const [ showALert, setShowAlert ] = useState(false)
  const [ showNavBar, setShowNavBar ] = useState(false)
  const [ alertMessage, setAlertMessage ] = useState('')
  const [ alertType, setAlertType ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ isScrollTopZero, setIsScrollTopZero ] = useState(true)

  const  dbLocation = 'http://localhost:80/paixAPI'
  
  useEffect(() =>{
      document.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () =>{
    if(document.documentElement.scrollTop > 200){
      setIsScrollTopZero(false)
    }else{
      setIsScrollTopZero(true)
    }
  }

  
  return(
    <div className='app bg-gray-100 text-gray-100'>

      <AppContext.Provider value={{currentNav, setCurrentNav, smallScreen, mediumScreen , showALert, setShowAlert, alertMessage, setAlertMessage, setAlertType, subject, setSubject, showNavBar, setShowNavBar, isScrollTopZero, setIsScrollTopZero, dbLocation}}>

        
          <div className='d-flex w-full bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)]'>

            <Suspense fallback={<></>}>
              <Navbar />
            </Suspense>
            <HeroBg />
              
            <Outlet />
           
            {
              showALert ? 
              <Alert alertMessage={alertMessage} alertType={alertType} setShowAlert={setShowAlert}/> : ''
            }
            <Suspense fallback={<></>}>
              <Footer />
            </Suspense>
          </div>
     
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
        element: 
        
        <React.Suspense fallback={<Loader />}>
          <Home />
        </React.Suspense>
      },
      // {
      //   path: '/Blog/:id',
      //   element: <ABlog />
      // },
      // {
      //   path: '/Blog/',
      //   element: <Blog />
      // },
      {
        path: '/About',
        element: 
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
      },
      {
        path: '/Services',
        element: <Services />
      },
      // {
      //   path: '/Pricing',
      //   element: <Pricing />
      // },
      {
        path: '/Contact',
        element: 
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
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
      <div>
        <RouterProvider router={router} />

      </div>
    </div>
  );


}
export default App;
         
