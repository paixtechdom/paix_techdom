import { useEffect, useRef } from "react"
import { useContext } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"
import { Blogs, BlogTypes } from "../../assets/Constants"
import { Loading } from "../../Components/Loading"
import './Blog.css'
import { BlogNav } from "./BlogNav"
import { BlogSection } from "./BlogSection"
import { RecentBlogs } from "./RecentBlogs"

export const Blog = () => {
    const [ blog, setBlog ] = useState([])
    const [ currentBlog, setCurrentBlog ] = useState(1)
    const [ bg, setBg ] = useState('')
    const [ section, setSection ] = useState('')
    const [ icon, setIcon ] = useState('')
    const [loadingBlogs, setLoadingBlogs ] = useState(true)
    const [ searchParameter, setSearchParameter ] = useState('')
    const searchRef = useRef()
    const { mediumScreen, smallScreen, setShowNavBar } = useContext(AppContext)

    useEffect(() => {
        setBlog(Blogs[currentBlog])
        const int = setInterval(() => {
            slide()
        }, 5000);
        return () => clearInterval(int)
    }, [currentBlog])

    const slide = (i) => {
        if(i > -1){
            setCurrentBlog(i)
        }else{
            setCurrentBlog(currentBlog == Blogs.length - 1 ? 0 : currentBlog + 1 )
        }
    }


    const id = useParams()

    useEffect(() =>{
        // document.documentElement.scrollTop = 0
        document.addEventListener('scroll', handleScroll)
        setShowNavBar(false)
    }, [])
    
    const handleScroll = () =>{
        let parent = document.querySelector('.blogHero')
        if(parent){
            const pos = parent.getBoundingClientRect()
            if(pos.top < 1 && pos.top > -400) {
                setBg('')
                setIcon('')
                setSection('')
            }
        }
    }
    const focusSearch = () => {
        searchRef.current.focus()
    }

    useEffect(() => {  
       setBlog(Blogs[0])
        document.documentElement.scrollTop = 0
    }, [])
    return(
        <>
        <BlogNav focusSearch={focusSearch}/>
        {/* <div className="flex justify-center w-full blogHero overflow-hidden bg-blue-00">
            <div className={`mt-9 flex ${mediumScreen ? 'h-auto flex-col' : 'w-11/12 h-screen'} justify-between items-center my- py-9 bg-blue-00`}>
          
                <div className={`flex flex-col items-start justify-center gap-9 ${mediumScreen ? 'w-full h-screen' : 'w-full h-full'} bg-blue-00`}>

                    <Link to={`/Blog/${Blogs[currentBlog].id}`} className={`flex flex-col ${smallScreen ? '' : ' gap-5 h-full'} ${mediumScreen ? 'w-12/12' : 'w-11/12 h-90 rounded-xl '} items-center justify-end relative overflow-hidden bg-blue-00`}>
                        <div className={`absolute ${mediumScreen ? 'w-full' : 'w-full'}  z-10 top-9 `}>
                            <p className="bg-gray-100 small text-gray-800 w-fit p-2 rounded-r-xl">LATEST BLOGS</p>
                        </div>
                        <div className={`flex items-center justify-between overflow-hidden bg-blue-5 h-full ${smallScreen ? '' : 'absolute'} ${mediumScreen ? 'w-full' : 'w-full'} `}>
                            <img src={Blogs[1].img} alt={blog.title+"'s image"} className={`w-full ${smallScreen ? '' : 'rounded-t-xl`'}`} />

                        </div>

                        <div className={`flex flex-col z-10 text-gray-100 py-4 gap-3  px-6 ${smallScreen ? '' : 'rounded-b-xl'} ${mediumScreen ? 'w-full' : 'w-full'} `} style={{
                            backgroundImage: smallScreen ? 
                            'linear-gradient(to bottom, rgb(0, 0, 0, 0.95), rgb(0, 0, 0, 0.95))'
                             : 
                            'linear-gradient(to bottom, rgb(0, 0, 0, 0.8), rgb(0, 0, 0))'
                        }}>
                            <div className="flex justify-between gap-3 w-full text-gray-400 small" style={{
                            }}>
                                    <div className="flex gap-3">
                                        <i className="bi bi-clock-history"></i>
                                        <p>{blog.date}</p>
                                    </div>
                                    <div className='flex gap-6 gap-3'>
                                        <div className="flex">
                                            <i className="bi bi-hand-thumbs-up"></i>
                                            <p>{blog.noLikes}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <i className="bi bi-chat-dots"></i>
                                            <p>{blog.noComments}</p>
                                        </div>
                                    </div>
                            </div>
                            <h1 className=" text-2xl font-bol">{blog.title}</h1>

                            <p className="small-lg text-gray-400">{blog.desc}</p>
                            <div className="flex">
                                <button className="bg- rounded-lg p-2 px-8 text-gray-400 border font-bold small-lg"> READ BLOG
                                </button>
                            </div>
                        </div>

                    </Link>    
                </div>    
                Blogs slide
                <div className={`flex justify-center relative items-start relative ${mediumScreen ? 'w-full h-2/6 mt-9' : 'w-3/12 h-auto '} bg-blue-00`}>

                    <div className={`absolute left-0 flex justify-center items-center h-full w-full ${mediumScreen ? '-9' : ''}`}>
                        <div className={`flex items-start ${mediumScreen ? 'justify-start' : 'justify-center'} text-7xl text-blue z-10 relative`} style={{
                        height: 150+'px',
                        width: mediumScreen ? 250+'px' : 100+'%',
                        }}>
                            <div className={`relative flex ${mediumScreen ? '' : 'flex-col w-10/12'}  items-center justify-center relative bg-blue-40 transition-all duration-500 `} style={{
                                transform: mediumScreen ? 
                                `translateX(-${currentBlog * 250}px)`
                                : 
                                `translateY(-${currentBlog * 150}px)`,
                            }}>

                                {
                                    Blogs.map((blog, key) => (
                                        <div key={key} className={`${blog.class} relative blog rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${currentBlog == key ? 'w-9/1 outline-blu' : 'w-7/1'}`} style={{
                                            height: 150+'px',
                                            width: 250+'px',
                                            transform: currentBlog == key ? 'scale(1)' : `scale(0.85)`,
                                            opacity: currentBlog == key ? '' : 0.5
                                                
                                        }} 
                                            onClick={() => {
                                                slide(key)
                                                document.documentElement.scrollTop = 0
                                            }}
                                        >
                                            <img src={blog.img} alt={blog.title} />

                                            <div className="absolute bottom-0 flex flex-col justify-center items-cente px-5 gap-3 w-full small text-white h-1/5" style={{
                                                backgroundColor: 'rgba(0, 0, 0)'
                                            }}>
                                                <p className='truncate'>{blog.title}</p>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                            
                    </div>
                </div>
    
            </div>

        </div> */}
        
        {/* Overlay and light */}
        <div className="w-full h-full">
            <div className={`fixed flex items-center justify-center top-0 bg-${bg} w-full h-screen transition-all duration-1000`} style={{
                zIndex: -1
            }}>
                <div className={`light flex flex-col items-center justify-center text-gray-900 font-bold text-xl text-${bg}`}>
                    <i className={`bi bi-${icon} text-6xl transition-all duration-200`}></i>
                    <p className={`text-4xl font-bold transition-all duration-200`} style={{
                }}>{section.toUpperCase()}</p>
                </div>
                <div className={`h-full transition-all duration-1000 absolute w-full top-0 ${bg == '' ? '' : 'overlay'}`}>
                </div> 
               
            </div>
        </div>
        
        <div id="search" className="pt-9 mt-9 z-20">
            <div className={`search w-full flex justify-center mt-9 pt-9`}>
                <div className={`border-blue-lg flex ${mediumScreen ? 'w-11/12' : 'w-7/12'} overflow-hidden rounded-full`} style={{
                    outline: '2px solid white'
                }}>
                    <input type="text" placeholder="Search Blogs" className={`w-full outline-none p-3 px-6 bg-transparent ${bg == '' ? '' : 'text-gray-200'}`} ref={searchRef} value={searchParameter} onChange={(e) => {
                        setSearchParameter(e.target.value)
                        setLoadingBlogs(true)
                    }}/>
                    <i className={`bi bi-search text-xl bg-gray-90 cursor-pointer ${bg == '' ? 'text-black' : 'text-white'} rounded-full flex justify-center items-center ${mediumScreen ? 'px-5' : 'p-5'}`} 
                    onClick={() => {
                        focusSearch()
                    }}></i>
                </div>
            </div>
        </div>
        {
            !loadingBlogs ?
            <>
                {
                    BlogTypes.map((type, key) => (
                        <BlogSection key={key} setBg={setBg} bgValue={type.bg} setSection={setSection} sectionValue={type.title} setIcon={setIcon} iconValue={type.icon}/>

                    ))
                }
                </> : 
                    <div className="flex items-center justify-center">
                        <Loading />
                    </div>
                    // BlogTypes.map((type, key) => (
                    //     type.title.toLowerCase().includes(searchParameter.toLowerCase()) &&
                    //     <BlogSection key={key} setBg={setBg} bgValue={type.bg} setSection={setSection} sectionValue={type.title} setIcon={setIcon} iconValue={type.icon}/>

                    // ))
                
        }

        <div className={`flex items-center justify-center my-9 py-9 text-white ${bg == '' ? 'bg-blue' : ''}`}>
            <form action="" className={`flex  items-center justify-center gap-4 flex-col ${mediumScreen ? 'w-full' : 'w-10/12'}`}>

                <h3 className="text-xl"> <i className="bi bi-bell"></i> Suscribe to our email whatever</h3>
                <div className={`flex  items-center justify-center gap-4 w-full ${mediumScreen ? 'flex-col' : ''} small`}>
                    <div className="border-white flex rounded-lg overflow-hidden w-11/12">
                        <i className="bi bi-person  bg-fade h-full text-xl p-2"></i>
                        <input type="text" placeholder="Name" className="p-2 outline-none bg-transparent"/>
                    </div>
                    <div className="border-white flex rounded-lg overflow-hidden w-11/12">
                        <i className="bi bi-envelope bg-fade h-full text-xl p-2"></i>
                        <input type="mail" placeholder="Email" className="p-2 outline-none bg-transparent"/>
                    </div>
                    <div className="border-white flex justify-center items-center rounded-lg overflow-hidden w-11/12  bg-fade text-white button cursor-pointer transition-all duration-500 text-xl">
                        <i className="bi bi-bell h-full p-2 cursor-pointer"></i>
                        <input type="submit" value="Suscribe" className="p-2 cursor-pointer"/>
                    </div>

                </div>
            </form>

        </div>
        </>
    )
}