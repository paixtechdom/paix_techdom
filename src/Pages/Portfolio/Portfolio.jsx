import { useContext, useEffect } from "react"
import { AppContext } from "../../App"
import { Parallax } from "../../Components/Parallax"
import { FAQ } from "../Components/FAQ"
import { BreadCrumbs } from "../Components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import albertImg from "../../assets/img/portfolioImgs/albert-interiors.png"
import classImg from "../../assets/img/portfolioImgs/classImg.png"
import livingImg from "../../assets/img/portfolioImgs/livingWaters.png"
import macmayImg from "../../assets/img/portfolioImgs/macmayImg.png"
import saculietImg from "../../assets/img/portfolioImgs/saculietImg.png"
import { Button } from "../../Components/Button"

const PortfolioItems = [
    {
        title: 'Saculiet Enterprises Nigeria',
        link: 'https://saculietdrivingschool.com',
        img: saculietImg
    },
    {
        title: 'Christ Liberty Assembly',
        link: 'https://christlibertyassembly.org.ng',
        img: classImg
    },
    {
        title: 'Macmay Group',
        link: 'https://macmaygroup.netlify.app',
        img: macmayImg
    },
    {
        title: 'Albert Interiors',
        link: 'https://albert-interiors.netlify.app',
        img: albertImg
    },
    // {
    //     title: 'Living Waters Fellowship',
    //     link: 'https://livingwatersglobal.netlify.app',
    //     img: livingImg
    // },
]



const Portfolio = () => {

    const { setCurrentNav } = useContext(AppContext)
    useEffect(() => {
        setCurrentNav(3)
        document.documentElement.scrollTop = 0
    }, [])


    return(
        <>
            <Helmet>
                <title>
                    Our Projects - Paix Techdom
                </title>
            </Helmet>            
            <main id="Portfolio" className="flex-col overflow-hidden w-full pt-9 center">

                <section className="flex flex-col">

                </section>

                

                {/* <BreadCrumbs links={['Home', 'Portfolio']}/> */}

                <section className="center flex-col gap- mt-[20vh]">
                    {/* <div className="w-11/12 lg:w-10/12 xl:w-9/12 mb-[15vh]">
                        <Parallax id={"ourworks"}>
                            <h2 className="text-blue-600 text-4xl my-4">Our Works</h2>
                        </Parallax>
                    </div> */}
                    <div className="flex flex-col lg:grid lg:grid-cols-2 w-11/12 lg:w-10/12 xl:w-9/12 gap-[15vh] lg:gap-[5vh] ">

                        {
                            PortfolioItems.map((portfolio, i) => (
                                <a href={portfolio.link} target="_blank" key={i} className={`w-full center flex-col -reverse lg :flex-row${i%2 !== 0 ? "-reverse" : ""} gap-[50px] lg:mb-0 relative overflow-hidden`}>
                                
                                    <Parallax id={portfolio?.title.replaceAll(' ', '')} className={"w-full 11/12"}>
                                        <img src={portfolio.img} alt={portfolio.title} className="w-full"/>
                                    </Parallax>


                                    <div className="flex flex-col gap-5 absolute bottom-0 min-h-[10vh] w-full text-center">
                                        <Parallax id={portfolio.title.replaceAll(' ', '')+'header'}>
                                            <a target="_blank" href={portfolio.link} className="text-center border border-blue-900 bg-primary bg-opacity-80 p-3 px-6 rounded-full shadow-2xl">{portfolio.title}</a>
                                        </Parallax>
                                       
                                    </div>

                                    <div className="top-0 absolute left-0 h-full w-full bg-secondary scale-125 opacity-0 hover:opacity-90 transition-all duration-500 center flex-col">
                                        <i className="bi bi-eye-fill text-4xl"></i> 
                                        <p>
                                            Click to view site
                                        </p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </section>
            </main>




            <FAQ />

        </>
    )
    
}


export default Portfolio