import { useState, createContext, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import { Home } from './Pages/Home/Home'
import { Navbar } from './Components/Sections/Navbar'
import './index.css'
import { Alert } from './Components/Alert'
import { Footer } from './Components/Sections/Footer';
import { About } from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import { Services } from './Pages/Services/Services';
import { Pricing } from './Pages/Pricing/Pricing';
import { Blog } from './Pages/Blog/Blog';
import { ABlog } from './Pages/Blog/ABlog';

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
      // if(document.documentElement.scroll){
      //   document.documentElement.scrollTop = document.documentElement.scrollTop + 1
      //   console.log('scroll')
      // }else{
      //   document.documentElement.scrollTop = document.documentElement.scrollTop
      // }
  }, [])

  const handleScroll = () =>{
    if(document.documentElement.scrollTop > 200){
      setIsScrollTopZero(false)
    }else{
      setIsScrollTopZero(true)
    }
  }

  
  useEffect(() =>{
    setInterval(() => {
      const mediaQuery = window.matchMedia('(max-width:950px)');
      setMediumScreen(mediaQuery.matches);
      
      const handleMediaQueryChange = (event) =>{
        setMediumScreen(event.matches)
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      
      
      return () =>{
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }, 200);

    setInterval(() => {

      const mediaQuery = window.matchMedia('(max-width:550px)');
      setSmallScreen(mediaQuery.matches);
      
      const handleMediaQueryChange = (event) =>{
        setSmallScreen(event.matches)
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      
      
      return () =>{
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }, 200);
    
  }, [])
  

  return(
    <div className='app '>
      <AppContext.Provider value={{currentNav, setCurrentNav, smallScreen, mediumScreen , showALert, setShowAlert, alertMessage, setAlertMessage, setAlertType, subject, setSubject, showNavBar, setShowNavBar, isScrollTopZero, setIsScrollTopZero, dbLocation}}>


          <div className='d-flex w-full'>
            {
              showNavBar ?
              <Navbar mediumScreen={mediumScreen} smallScreen={smallScreen}/>
               : ''
            }
            <Outlet />
           
            {
              showALert ? 
              <Alert alertMessage={alertMessage} alertType={alertType} setShowAlert={setShowAlert}/> : ''
            }
            <Footer />
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
        element: <Home />
      },
      {
        path: '/Blog/:id',
        element: <ABlog />
      },
      {
        path: '/Blog/',
        element: <Blog />
      },
      // {
      //   path: '/About',
      //   element: <About />
      // },
      // {
      //   path: '/Services',
      //   element: <Services />
      // },
      // {
      //   path: '/Pricing',
      //   element: <Pricing />
      // },
      // {
      //   path: '/Contact',
      //   element: <Contact />
      // },
      {
        path: '/*',
        element: <h4 className='parent' style={{
          marginTop: 100+'px',
          marginLeft: 50+'px'
        }}>Page not found <Link to='/'>return to the home page</Link></h4>
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
         
