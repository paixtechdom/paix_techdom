import React, { useState, createContext, useEffect, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css'
import { Alert } from './Components/Alert'
import { Blog } from './Pages/Blog/Blog';
import { ABlog } from './Pages/Blog/ABlog';
import { Loader } from './Pages/Components/Loader';
import { HeroBg } from './Components/HeroBg';
import { IconButton } from './Components/Button';
import { HelmetProvider } from 'react-helmet-async';


import { Navbar } from './Components/Sections/Navbar';
import { Footer } from './Components/Sections/Footer';

// ************************PAGES***************
const Home = React.lazy(() => import('./Pages/Home/Home'))
const About = React.lazy(() => import('./Pages/About/About'))
const Services = React.lazy(() => import('./Pages/Services/Services'))
const Portfolio = React.lazy(() => import('./Pages/Portfolio/Portfolio'))
const Quote = React.lazy(() => import('./Pages/Quote/Quote'))
const Contact = React.lazy(() => import('./Pages/Contact/Contact'))
const PageNotFound = React.lazy(() => import('./Pages/PageNotFound'))


import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"





export const AppContext = createContext()

const Layout = () =>{
  const [ currentNav, setCurrentNav ] = useState(0)  
  const [ smallScreen, setSmallScreen ] = useState(false)  
  const [ mediumScreen, setMediumScreen  ] = useState(false)  
  const [ showNavBar, setShowNavBar ] = useState(false)
  const [ showALert, setShowAlert ] = useState(false)
  const [ alertMessage, setAlertMessage ] = useState('')
  const [ alertType, setAlertType ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ isScrollTopZero, setIsScrollTopZero ] = useState(true)
  const [ scrolledDown, setScrolledDown ] = useState(false)

  const  dbLocation = 'http://localhost:80/paixAPI'

  document.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 500){
        setScrolledDown(true)
    }else{
        setScrolledDown(false)
    }
})

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
      <HelmetProvider>
        <AppContext.Provider value={{currentNav, setCurrentNav, smallScreen, mediumScreen , showALert, setShowAlert, alertMessage, setAlertMessage, setAlertType, subject, setSubject, showNavBar, setShowNavBar, isScrollTopZero, setIsScrollTopZero, dbLocation}}>

          <div className='d-flex w-full bg-gradient-to-l from-secondary via-primary to-secondary'>

            <Suspense fallback={<></>}>
              <Navbar />
            </Suspense>
            <HeroBg />
              
            <Outlet />

            <IconButton icon={'arrow-up'} className={`fixed bottom-[5%] z-50 scale-125  transition-all duration-1000 ${scrolledDown ? 'right-[5%]' : '-right-[50%]'}`} func={() => {
              scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }}/>
           
            {
              showALert ? 
              <Alert alertMessage={alertMessage} alertType={alertType} setShowAlert={setShowAlert}/> : ''
            }
            <Suspense fallback={<></>}>
              <Footer />
            </Suspense>
          </div>
     
        </AppContext.Provider>
      </HelmetProvider>
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
        element: 
          <Suspense fallback={<Loader />}>
              <Services />
          </Suspense>
      },
      {
        path: '/works',
        element: <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
      },
      {
        path: '/Quote',
        element: <Suspense fallback={<Loader />}>
            <Quote />
          </Suspense>
      },
      {
        path: '/Contact',
        element: 
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
      },
      {
        path: '/*',
        element: 
          <Suspense fallback={<Loader />}>
            <PageNotFound /> 
          </Suspense>
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
         
