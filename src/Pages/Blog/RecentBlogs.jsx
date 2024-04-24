import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../App"
import { Blogs } from "../../assets/BlogInfo"
import { Button } from "../../Components/Button"
import { Parallax } from "../../Components/Parallax"

export const RecentBlogs = ({no, showReadMore}) => {
    const { mediumScreen, smallScreen } = useContext(AppContext)
    return(
        <div id="Blog" className="section my-9 py-9 flex flex-col justify-center items-center gap-9">
            <div className={`flex items-center justify-center mb-5 ${ smallScreen ? 'flex flex-col gap-9' : mediumScreen ? 'w-11/12 grid grid-cols-2 gap-y-9' : ' grid grid-cols-3 w-9/12 gap-y-9'} `}>
                {
                    Blogs.map((blog, key) => (
                        key < no &&
                        // <Link to={`Blog/${blog.id}`} key={key} className={` h-full ${smallScreen ? 'w-9/12 my-4' : 'w-11/12'} overflow-hidden flex py- rounded-2xl shadow-lg `} style={{
                        <div key={key} className={` h-full ${smallScreen ? 'w-9/12 my-4' : 'w-11/12'} overflow-hidden flex py- rounded-2xl shadow-lg `} style={{
                            height: mediumScreen ? 100+'%' : 70+'vh'
                        }}>
                                <Parallax id='blog' key={key}>
                                <div className="flex flex-col justify-between h-full bg-blue-10">
                                    <div className={`flex ${mediumScreen ? 'items-center' : ''} h-4/5 w-full overflow-hidden`} style={{
                                        height: 30+'vh',
                                    }}>
                                        
                                    <img src={blog.img} alt={blog.title} className={`w-full ${smallScreen ? 'rounded-t-xl' : ''}`} />
                                    </div>

                                    <div className="flex flex-col bg-gray-4 px-3 pt-2" style={{
                                        height: mediumScreen ? 100+'%' : 40+'vh'
                                    }}>
                                        <div className="flex justify-between items-center  bg-blue-30">
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
                                        <div className={`flex flex-col bg-blue-30 h-full justify-between mb-4 mt-2 gap-3 `} >
                                            <h3 className="font-bold text-lg text-gray-80">{blog.title}</h3>
                                            <h3 className="font-bol text-gray-80 my2 small-lg">{blog.desc}</h3>
                                            <div className="w-full pb-5">
                                                <div className="z-10 rounded-full h-full w-fit noBgButton  font-bold  bg-blue button px-6 py-3 text-white small">READ MORE</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <h3>{blog.title}</h3> */}
                                </Parallax>
                            </div>

                    ))
                }
            </div>
            {
                showReadMore ?
                <div className="w-full flex justify-center">
                    <Link to='/Blog'  className={`z-10 rounded-full h-full ${ smallScreen ? 'w-11/12' : mediumScreen ? 'w-8/12' : !mediumScreen ? 'w-5/12' : '' } noBgButton bg-blue shadow-xl font-bold  text-white text-center button px- py-4`}> READ MORE BLOGS
                    </Link>
                </div> : ''
            }
        </div>  
    )
}