import axios from "axios"
import { useState } from "react"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"
import { Blogs } from "../../assets/Constants"
import { Button } from "../../Components/Button"
import { Parallax } from "../../Components/Parallax"

export const BlogSection = ({setBg, bgValue, setSection, sectionValue, setIcon, iconValue, searchParameter, setLoadingBlogs, setSearchedBlogs, searchedBlogs }) => {
    // const [ Blogs, setBlogs ] = useState([])
    const { mediumScreen, smallScreen, dbLocation } = useContext(AppContext)

    useEffect(() =>{
        document.addEventListener('scroll', handleScroll)
        // fetchBlogs()
        Blogs.forEach((blog) =>{
            if(blog.title.toLowerCase().includes(searchParameter.toLowerCase()) || blog.desc.toLowerCase().includes(searchParameter.toLowerCase())){
                setSearchedBlogs(searchedBlogs + 1)
                setTimeout(() => {
                    setLoadingBlogs(false)
                    console.log(searchParameter)
                }, 2000);
            }
        })
    }, [])

    // const fetchBlogs = () => {
    //     try {
    //         axios.get(`${dbLocation}/blogs.php/get/${sectionValue}`).then(function(response){
    //             console.log(response.data)
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    
    const handleScroll = () =>{
        // if(currentBlog < Blogs.length - 1){
        //         slide()
        //     }
            let parent = document.querySelector('.'+bgValue+'class')
            if(parent){
                const pos = parent.getBoundingClientRect()
                if(pos.top < 400 && pos.top > -400) {
                    setSection(sectionValue)
                    setBg(bgValue)
                    setIcon(iconValue)
                }

            }
    }

    return(
        <div id="" className={`${bgValue+'class'} my-9 py-9 flex flex-col justify-center items-center gap-9 text-gray-300 bg-blue-00`}>
            <div className={`flex flex-wrap items-center justify-center mb-5 gap-9 
            ${ smallScreen ? 'gap-3' : mediumScreen ? 'w-11/12' : ''} 
            bg-blue-20`}>
            {/* ${ smallScreen ? 'flex flex-col gap-9' : mediumScreen ? 'w-11/12 grid grid-cols-2 gap-y-9' : ' grid grid-cols-3 w-10/12 gap-y-9'}  */}
                {
                    Blogs?.map((blog, key) => (
                        (!searchParameter == '' ? 
                        blog.title.toLowerCase().includes(searchParameter.toLowerCase()) || blog.desc.toLowerCase().includes(searchParameter.toLowerCase()) 
                        :
                        blog.section == sectionValue) &&
                        // <Parallax id={blog.title.replaceAll(' ', '-')} key={key}>
                        <div to={`${blog.id}`} key={key} className={`m-auto h-full ${smallScreen ? ' my-4' : 'w-11/12'} flex items-between  rounded-xl shadow-lg bg-blue-60 border-white border-top-none z-10`} style={{
                            height: mediumScreen ? 100+'%' : 70+'vh',
                            width: smallScreen ? 90+'%' : 350+'px'
                        }}>
                                    
                                <div  key={key} className="flex flex-col justify-between h-full bg-blue-10">
                                    <div className={`flex ${mediumScreen ? 'items-center' : ''} h-4/5 w-full`} style={{
                                        height: mediumScreen ? 100+'%' : 30+'vh',
                                    }}>
                                        
                                        <img src={blog.img} alt={blog.title} className={`w-full rounded-t-xl`} />
                                    </div>

                                    <div className="flex flex-col bg-gray-4 px-3 py-2 bg-red-30 rounded-b-xl" style={{
                                        height: mediumScreen ? 100+'%' : ''
                                    }}>
                                        <div className="flex justify-between items-center">
                                            <h3 className="small">{blog.date}</h3>    
                                            <div className="flex items-center gap-1">
                                                <i className="bi bi-chat-dots"></i>
                                                <h3 className="small">{blog.noComments}</h3>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <i className="bi bi-hand-thumbs-up"></i>
                                                <h3 className="small">{blog.noLikes}</h3>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col h-full justify-between mb-4 mt-2 gap-3 `} >
                                            <h3 className="font-bold text-lg text-gray-80">{blog.title}</h3>
                                            <h3 className="font-bol text-gray-80 my2 small-lg">{blog.desc}</h3>
                                            <div className="w-full">
                                                <div className="z-10 rounded-lg h-full w-fit   font-bold  bg-transparent underline button  py-2 text-white small">READ MORE</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        // </Parallax> 

                    ))
                } 
            </div>
            <div className="w-full flex justify-center">
                <Link to='/Blog'  className={`z-10 rounded-xl h-full ${ smallScreen ? 'w-11/12' : mediumScreen ? 'w-8/12' : !mediumScreen ? 'w-5/12' : '' }  font small-lg border-white text-white py-3 flex items-center gap-1 justify-center`}> SHOW MORE <i className="bi bi-chevron-down text-xl"></i>
                </Link>
            </div>
           
        </div>  
    )
}