import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"
import { Blogs } from "../../assets/BlogInfo"

export const ABlog = () => {
    const [ blog, setBlog ] = useState([])
    const { mediumScreen, setShowNavBar } = useContext(AppContext)
    const id = useParams()

    useEffect(() => {  
        setShowNavBar(false)
        Blogs.forEach(blog => {
                if(blog.id == id.id){
                    setBlog(blog)
                } 
            }
        )
        document.documentElement.scrollTop = 0
    }, [])
    return(
        <div className="w-full flex justify-center my-9 py-9">
            {/* <div className={`h-screen mt-9 pt-9 flex flex-col items-center justify-cente ${mediumScreen ? 'w-11/12' : 'w-9/12'}`}>
                <i className="bi bi-info-circle-fill text-5xl text-blue"></i>
                <h3 className="mt-4 font-bold">Blog page is under construction</h3>
                <Link to='/' className="underline mt-4 text-blue-600">click to return to the Home page</Link>
            </div> */}
                <div className="w-full h-4/5 bg-blue" style={{
                    backgroundImage: blog.img
                }}>
                </div>
                    <img src={blog.img} alt="" />
                <div>
                    {blog.title} 
                    {blog.desc} 
                    {blog.content} 
                    {blog.date} 
                    {blog.noLikes} 
                    {blog.noComments} 

                </div>
        </div>
    )
}