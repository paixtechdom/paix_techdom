import React, { useState, createContext, useEffect, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import './index.css'
import { Alert } from './Components/Alert'
import { Blog } from './Pages/Blog/Blog';
import { ABlog } from './Pages/Blog/ABlog';
import { Loader } from './Pages/Components/Loader';
import { HeroBg } from './Components/HeroBg';
import { IconButton } from './Components/Button';
import { HelmetProvider } from 'react-helmet-async';


const Navbar = React.lazy(() => delayLoad(import('./Components/Sections/Navbar')))
const Footer = React.lazy(() => delayLoad(import('./Components/Sections/Footer')))

// ************************PAGES***************
const Home = React.lazy(() => delayLoad(import('./Pages/Home/Home')))
const About = React.lazy(() => delayLoad(import('./Pages/About/About')))
const Services = React.lazy(() => delayLoad(import('./Pages/Services/Services')))
const Pricing = React.lazy(() => delayLoad(import('./Pages/Pricing/Pricing')))
const Quote = React.lazy(() => delayLoad(import('./Pages/Quote/Quote')))
const Contact = React.lazy(() => delayLoad(import('./Pages/Contact/Contact')))
const PageNotFound = React.lazy(() => delayLoad(import('./Pages/PageNotFound')))


import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"



function delayLoad(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  }).then(() =>promise);
}

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

          <div id='top'></div>
          <div className='d-flex w-full bg-gradient-to-l from-[rgba(0,0,10)] via-[rgba(0,0,24)] to-[rgba(0,0,10)]'>

            <Suspense fallback={<></>}>
              <Navbar />
            </Suspense>
            <HeroBg />
              
            <Outlet />

            <IconButton icon={'arrow-up'} className={`fixed bottom-5 z-50  transition-all duration-1000 ${scrolledDown ? 'right-5' : '-right-[50%]'}`} func={() => {
                document.querySelector('#top').scrollIntoView({
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
        path: '/Pricing',
        element: <Suspense fallback={<Loader />}>
            <Pricing />
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
         
