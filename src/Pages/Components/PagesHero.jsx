import { LazyLoadImage } from "react-lazy-load-image-component"
import { Button } from "../../Components/Button"
import { Parallax } from "../../Components/Parallax"

export const PagesHero = ({image, header, text, scrollTo, button}) => {
    return(
        <Parallax id='sf' className={'w-[100vw] h-fit  lg:min-h-[80vh] center relative '}>

            <section className="flex flex-col lg:flex-row w-[90%] lg:w-10/12 xl:w-9/12 justify-between items-center h-full z-10 gap-9 overflow-hid den relative pt-[15vh] lg:pt-[5ch]">
                <div className="flex flex-col justify-center w-full lg:w-8/12 z-20 gap-4"> 
                    <h1 className="text-5xl text-blue-600">
                        {header}
                    </h1>
                    <div className="flex flex-col gap-3 text-gray-300 tracking-wide leading-relaxed ">
                        {
                            text.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))
                        }
                    </div>
                    {
                        button == false ? '' :
                        <Button text={button ? button : 'Read more'} icon={'arrow-down'} className={'w-fit'} func={() => {
                            document.querySelector(`#${scrollTo}`).scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}/>
                    }
                </div>

                    
                <div className="flex center w-fit ull lg:w-6/12 z-10 relative">
                <div className="absolute w-full h-[90%] border-blue-900 border-2 rounded-3xl -bottom-[5px] -right-[15px] scale-90 bg-secondary animate-pulse">

                    </div>
                    <LazyLoadImage
                        src={image} 
                        placeholderSrc={header + " Image" } 
                        className="h-fit w-full z-0 top-0 right-0 rounded-3xl scale-90 -translate-x-[10px] -translate-y-[10px]"
                        effect="blur"
                    />
                </div>
            </section>    

        </Parallax>
    )
}